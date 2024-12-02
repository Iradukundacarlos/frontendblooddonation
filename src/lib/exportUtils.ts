import { User } from '@/types/user';

export const exportUsersToCSV = (users: User[]) => {
  const headers = ['ID', 'First Name', 'Last Name', 'Username', 'Email', 'Phone Number', 'Role'];
  const csvContent = [
    headers.join(','),
    ...users.map(user =>
      [user.id, user.firstName, user.lastName, user.userName, user.email, user.phoneNumber, user.role].join(',')
    )
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'users.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

