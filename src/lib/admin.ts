import { useMutation } from "@tanstack/react-query";
import { User, UpdateUserDto } from "../types/user";
import { axiosInstance } from "./axios";
import axios from "axios";

export const fetchUsers = async (page = 1, size = 10) => {
  const response = await axiosInstance.get(
    `/api/users?page=${page}&size=${size}`
  );
  return response.data;
};

export const addUser = async (userData: Omit<User, "id">) => {
  const response = await axiosInstance.post("/api/users", userData);
  return response.data;
};

export const updateUser = async (userId: number, updateData: UpdateUserDto) => {
  const response = await axiosInstance.put(`/api/users/${userId}`, updateData);
  return response.data;
};

export const deleteUser = async (userId: number) => {
  const response = await axiosInstance.delete(`/api/users/${userId}`);
  return response.data;
};

export const exportUsers = async () => {
  try {
    const response = await axiosInstance.get("/users/export", {
      responseType: "blob",
    });

    // Check if the response is actually a blob containing CSV data
    if (response.data.type && response.data.type.includes("text/csv")) {
      return response.data;
    }

    // If we received JSON error instead of CSV, parse it
    const textResponse = await response.data.text();
    try {
      const errorData = JSON.parse(textResponse);
      throw new Error(errorData.message || "Export failed");
    } catch (e) {
      throw new Error("Failed to export users");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to export users"
      );
    }
    throw error;
  }
};

export const uploadUsers = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  console.log("formData:", formData);
  const response = await axiosInstance.post("/users/import", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const useImportUsers = () => {
  return useMutation({
    mutationFn: (file: File) => uploadUsers(file),
  });
};
