

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Add your header, navigation, etc. here */}
      <main>{children}</main>
      {/* Add your footer here */}
    </div>
  );
};

export default Layout;