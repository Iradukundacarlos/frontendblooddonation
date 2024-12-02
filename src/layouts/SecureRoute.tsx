
import { Navigate } from 'react-router-dom';

interface SecureRouteProps {
  children: React.ReactNode;
  role: 'admin' | 'user' | 'manager';
}

const SecureRoute: React.FC<SecureRouteProps> = ({ children, role }) => {
  // This is a placeholder for actual authentication logic
  const isAuthenticated = true; // Replace with actual auth check
  const userRole = 'admin'; // Replace with actual user role

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (role !== userRole) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default SecureRoute;

