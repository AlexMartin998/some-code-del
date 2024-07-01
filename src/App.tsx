import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';

import AppRouter from './router/AppRouter';
import AppTheme from './theme/AppTheme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppTheme>
        {/* ========= router ========= */}
        <RouterProvider router={AppRouter} />
      </AppTheme>
    </QueryClientProvider>
  );
}

export default App;
