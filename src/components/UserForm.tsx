import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { User } from "../types/user";
import { useCreateUser, useUpdateUser } from "../lib/users";
import { Loader2 } from "lucide-react";

const userSchema = z.object({
  firstName: z.string().trim().min(2, "First name is required"),
  lastName: z.string().trim().min(2, "Last name is required"),
  email: z.string().trim().email("Invalid email address"),
  phoneNumber: z.string({ required_error: "Phone number is required" }).trim(),
  role: z.enum(["ROLE_USER", "ROLE_MANAGER", "ROLE_ADMIN"], {
    required_error: "Role is required",
  }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .default("12345678"),
  confirmPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .default("12345678"),
});

export type UserFormData = Omit<User, "id"> & {
  password: string;
  confirmPassword: string;
};

interface UserFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: UserFormData) => void;
  initialData?: User;
}

export function UserForm({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}: UserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<UserFormData>({ 
    resolver: zodResolver(userSchema),
    defaultValues: initialData || {
      role: "ROLE_USER",
    },
  });

  const { mutate, isPending } = useCreateUser();
  const { mutate: updateMutate, isPending: updatePending } = useUpdateUser();

  const handleFormSubmit = (data: UserFormData) => {
    if (initialData) {
      updateMutate(
        { id: initialData.id, userData: data },
        {
          onSuccess: () => {
            toast.success("User updated successfully");
          reset();
          onClose();
        },
        onError: (error: Error) => {
          toast.error(error.message || "Failed to update user");
        },
      });
    } else {
      mutate(data, {
        onSuccess: () => {
          toast.success("User created successfully");
          reset();
          onClose();
        },
        onError: (error: Error) => {
          toast.error(error.message || "Failed to create user");
        },
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {initialData ? "Edit User" : "Add New User"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" {...register("firstName")} />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" {...register("lastName")} />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input id="phoneNumber" {...register("phoneNumber")} />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="role">Role</Label>
            <Select
              defaultValue={initialData?.role || "ROLE_USER"}
              onValueChange={(value) => {
                setValue(
                  "role",
                  value as "ROLE_USER" | "ROLE_MANAGER" | "ROLE_ADMIN"
                );
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ROLE_USER">User</SelectItem>
                <SelectItem value="ROLE_MANAGER">Manager</SelectItem>
                <SelectItem value="ROLE_ADMIN">Admin</SelectItem>
              </SelectContent>
            </Select>
            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role.message}</p>
            )}
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <Loader2 className="animate-spin" />
              ) : initialData ? (
                "Update"
              ) : (
                "Add"
              )}{" "}
              User
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
