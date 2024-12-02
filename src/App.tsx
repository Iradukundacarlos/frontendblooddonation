import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Register,
  Login,
  ForgotPassword,
  ResetPassword,
  AdminDashboard,
  AboutUs,
  ContactUs,
  AddUser,
  EditUser,
  UserList,
  WhyDonate,
  ManagerDashboard,
  UserDashboard,
  NotFound,
} from "./pages";
import { MainLayout, AdminLayout, UserLayout, ManagerLayout } from "./layouts";
import SecureRoute from "./layouts/SecureRoute";
import UserProfile from "./components/UserProfile";
import Profile from "./pages/Profile";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/why-donate" element={<WhyDonate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/me" element={<Profile />} />
        </Route>

        {/* Admin routes */}
        <Route
          element={
            <SecureRoute role="admin">
              <AdminLayout />
            </SecureRoute>
          }
        >
          <Route
            path="/admin"
            element={<Navigate to="/admin/dashboard" replace />}
          />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/users/add" element={<AddUser />} />
          <Route path="/admin/users/edit/:id" element={<EditUser />} />
        </Route>

        {/* User routes */}
        <Route
          element={
            <SecureRoute role="user">
              <UserLayout />
            </SecureRoute>
          }
        >
          <Route
            path="/user"
            element={<Navigate to="/user/dashboard" replace />}
          />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/profile" element={<UserProfile />} />
        </Route>

        {/* Manager routes */}
        <Route
          element={
            <SecureRoute role="manager">
              <ManagerLayout />
            </SecureRoute>
          }
        >
          <Route
            path="/manager"
            element={<Navigate to="/manager/dashboard" replace />}
          />
          <Route path="/manager/dashboard" element={<ManagerDashboard />} />
        </Route>

        {/* Not Found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
