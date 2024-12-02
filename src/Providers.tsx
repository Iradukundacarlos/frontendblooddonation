;
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode; }) {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Toaster position="top-right" />
      </QueryClientProvider>
    </Router>
  );
}

