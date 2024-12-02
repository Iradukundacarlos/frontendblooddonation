
import { Outlet } from 'react-router-dom';
import ManagerSidebar from '../components/ManagerSidebar';

const ManagerLayout: React.FC = () => {
  return (
    <div className="flex">
      <ManagerSidebar />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default ManagerLayout;

