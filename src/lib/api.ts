import { UsersResponse } from "@/types/user";

export const mockUsers: UsersResponse = {
  totalElements: 6,
  totalPages: 1,
  first: true,
  last: true,
  size: 6,
  content: [
    {
      id: 1,
      firstName: "Emmanuel",
      lastName: "Nkurunziza",
      userName: "emmanuel.nk",
      email: "emmanuel.nk@example.com",
      phoneNumber: "+250788123456",
      role: "ROLE_ADMIN",
    },
    {
      id: 2,
      firstName: "Alice",
      lastName: "Uwase",
      userName: "alice.uwase",
      email: "alice.uwase@example.com",
      phoneNumber: "+250788654321",
      role: "ROLE_MANAGER",
    },
    {
      id: 3,
      firstName: "Jean",
      lastName: "Hategekimana",
      userName: "jean.hatege",
      email: "jean.hatege@example.com",
      phoneNumber: "+250788987654",
      role: "ROLE_USER",
    },
    {
      id: 4,
      firstName: "Grace",
      lastName: "Mukamana",
      userName: "grace.mukamana",
      email: "grace.mukamana@example.com",
      phoneNumber: "+250788765432",
      role: "ROLE_USER",
    },
    {
      id: 5,
      firstName: "David",
      lastName: "Irakiza",
      userName: "david.irakiza",
      email: "david.irakiza@example.com",
      phoneNumber: "+250788345678",
      role: "ROLE_MANAGER",
    },
    {
      id: 6,
      firstName: "Yvonne",
      lastName: "Mukeshimana",
      userName: "yvonne.mukeshi",
      email: "yvonne.mukeshi@example.com",
      phoneNumber: "+250788234567",
      role: "ROLE_ADMIN",
    },
  ],
  number: 0,
  sort: {
    empty: false,
    sorted: true,
    unsorted: false,
  },
  numberOfElements: 6,
  pageable: {
    offset: 0,
    sort: {
      empty: false,
      sorted: true,
      unsorted: false,
    },
    paged: true,
    pageNumber: 0,
    pageSize: 6,
    unpaged: false,
  },
  empty: false,
};


export const fetchUsers = async (): Promise<UsersResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockUsers;
};

// export const addUser = async (user: Omit<User, 'id'>): Promise<User> => {
//   const newUser = { ...user, id: String(mockUsers.length + 1) };
//   mockUsers.push(newUser);
//   return newUser;
// };

// export const updateUser = async (user: User): Promise<User> => {
//   const index = mockUsers.findIndex(u => u.id === user.id);
//   if (index !== -1) {
//     mockUsers[index] = user;
//   }
//   return user;
// };

// export const deleteUser = async (id: string): Promise<void> => {
//   const index = mockUsers.findIndex(u => u.id === id);
//   if (index !== -1) {
//     mockUsers.splice(index, 1);
//   }
// };

