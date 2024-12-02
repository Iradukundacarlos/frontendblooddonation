import { handleAxiosError } from "../utils/errorHandler";
import { LoginFormData, SignupFormData, UserFormData } from "../types/user";
import { axiosInstance } from "./axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const createUser = async (userData: SignupFormData) => {
  try {
    const response = await axiosInstance.post("/auth/sign-up", userData);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const updateUser = async (id: number, userData: UserFormData) => {
  try {
    const response = await axiosInstance.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const deleteUser = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const loginUser = async (userData: LoginFormData) => {
  try {
    const response = await axiosInstance.post("/auth/login", userData);
    console.log("login response:", response);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userData: SignupFormData) => createUser(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteUser(id),
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, userData }: { id: number; userData: UserFormData }) =>
      updateUser(id, userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("/users");
        return response.data;
      } catch (error) {
        console.log("error:", error);
        throw new Error(handleAxiosError(error));
      }
    },
  });
};
