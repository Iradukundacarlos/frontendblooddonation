import { UserManagementTable } from "@/components/UserManagementTable";

const AdminDashboard = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <UserManagementTable />
    </main>
  );
};
export default AdminDashboard;