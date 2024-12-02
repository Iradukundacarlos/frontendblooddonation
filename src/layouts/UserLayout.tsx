
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';

const UserLayout: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;

