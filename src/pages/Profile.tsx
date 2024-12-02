import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const { logout } = useAuth();
  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);

    // Only fetch user data if authenticated
    if (token) {
      const name = localStorage.getItem("userName") || "Name not found";
      const email = localStorage.getItem("userEmail") || "Email not found";
      const role = localStorage.getItem("userRole") || "Role not found";
      setUserData({ name, email, role });
    }
  }, []);

  const handleLogout = () => {
    // Clear all user data from localStorage
    localStorage.clear();
    setIsAuthenticated(false);
    setUserData({ name: "", email: "", role: "" });
    logout();
    navigate("/login");
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Please log in to view your profile</h1>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Go to Login
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-white">My Profile</h1>
            <button
              onClick={handleLogout}
              className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100"
            >
              Logout
            </button>
          </div>

          {/* Profile Content */}
          <div className="px-8 py-6">
            <div className="space-y-6">
              {/* Profile Picture Placeholder */}
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-4xl text-gray-500">
                    {userData.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Profile Information */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <p className="mt-1 text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    {userData.name}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="mt-1 text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    {userData.email}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Role</label>
                  <p className="mt-1 text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    {userData.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
