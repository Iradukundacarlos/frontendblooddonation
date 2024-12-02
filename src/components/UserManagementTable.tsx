import React, { useState } from "react";
import { MantineReactTable, MRT_ColumnDef, MRT_Row } from "mantine-react-table";
import { Group } from "@mantine/core";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  addUser,
  updateUser,
  deleteUser,
  exportUsers,
  uploadUsers,
  useImportUsers,
} from "../lib/admin";
import { User, UsersResponse, UpdateUserDto } from "../types/user";
import { Button } from "./ui/button";
import { UserForm } from "./UserForm";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Input } from "./ui/input";
import { fetchUsers } from "../lib/api";
import { useDeleteUser, useGetUsers } from "../lib/users";
import { useTheme } from "../contexts/ThemeContext";
import { Loader2 } from "lucide-react";
// import { fetchUsers } from '../lib/admin';

export function UserManagementTable() {
  const [rowSelection, setRowSelection] = useState({});
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const queryClient = useQueryClient();
  const { theme } = useTheme();

  const { data, isLoading, isError } = useGetUsers();
  console.log("users:", data);

  const addMutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("User added successfully");
    },
    onError: (error: Error) => {
      toast.error(`Error adding user: ${error.message}`);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({
      userId,
      updateData,
    }: {
      userId: number;
      updateData: UpdateUserDto;
    }) => updateUser(userId, updateData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("User updated successfully");
    },
    onError: (error: Error) => {
      toast.error(`Error updating user: ${error.message}`);
    },
  });

  const handleAddUser = (userData: Omit<User, "id">) => {
    addMutation.mutate(userData);
  };

  const handleEditUser = (userData: UpdateUserDto) => {
    if (editingUser) {
      updateMutation.mutate({ userId: editingUser.id, updateData: userData });
      setEditingUser(null);
    }
  };
  const { mutate: deleteUser, isPending: isDeleting } = useDeleteUser();

  const handleDeleteUser = (userId: number) => {
    deleteUser(userId, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
        toast.success("User deleted successfully");
      },
      onError: (error: Error) => {
        toast.error(`Error deleting user: ${error.message}`);
      },
    });
  };

  const handleExportUsers = async () => {
    try {
      const blob = await exportUsers();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "users.csv";
      a.click();
      toast.success("Users exported successfully");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      toast.error(`Error exporting users: ${errorMessage}`);
    }
  };

  const { mutate: importUsers, isPending: isImporting } = useImportUsers();
  const handleUploadUsers = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      importUsers(file, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["users"] });
          toast.success("Users uploaded successfully");
        },
        onError: (error: Error) => {
          toast.error(`Error uploading users: ${error.message}`);
        },
      });
    }
  };

  const columns: MRT_ColumnDef<User>[] = [
    { accessorKey: "firstName", header: "First Name" },
    { accessorKey: "lastName", header: "Last Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "phoneNumber", header: "Phone Number" },
    { accessorKey: "role", header: "Role" },
    {
      id: "actions",
      header: "Actions",
      Cell: ({ row }: { row: MRT_Row<User> }) => (
        <Group spacing={4} position="right" noWrap>
          <Button
            onClick={() => setEditingUser(row.original)}
            variant="outline"
            size="sm"
          >
            Edit
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm">
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  user's account and remove their data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  disabled={isDeleting}
                  onClick={() => handleDeleteUser(row.original.id)}
                >
                  {isDeleting ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Continue"
                  )}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Group>
      ),
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading users</div>;
  }

  return (
    <>
      <MantineReactTable
        columns={columns}
        data={data || []}
        enableRowSelection
        enableColumnOrdering
        enableGlobalFilter
        mantineTableProps={{
          striped: true,
          highlightOnHover: true,
        }}
        state={{ rowSelection }}
        onRowSelectionChange={setRowSelection}
        renderTopToolbarCustomActions={() => (
          <Group spacing={8}>
            <Button onClick={() => setIsAddUserOpen(true)}>Add New User</Button>
            <Button onClick={handleExportUsers}>Download Data</Button>
            <Input
              type="file"
              accept=".csv,.json"
              onChange={handleUploadUsers}
              style={{ display: "none" }}
              id="upload-users"
            />
            <Button
              onClick={() => document.getElementById("upload-users")?.click()}
              disabled={isImporting}
            >
              {isImporting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                "Upload Data"
              )}
            </Button>
          </Group>
        )}
        mantinePaperProps={{
          className:
            theme === "dark"
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-900",
        }}
        mantineTableHeadCellProps={{
          className:
            theme === "dark"
              ? "bg-gray-700 text-white"
              : "bg-gray-100 text-gray-900",
        }}
        mantineTableBodyCellProps={{
          className:
            theme === "dark"
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-900",
        }}
      />
      <UserForm
        isOpen={isAddUserOpen}
        onClose={() => setIsAddUserOpen(false)}
        onSubmit={handleAddUser}
      />
      {editingUser && (
        <UserForm
          isOpen={!!editingUser}
          onClose={() => setEditingUser(null)}
          onSubmit={handleEditUser}
          initialData={editingUser}
        />
      )}
    </>
  );
}
