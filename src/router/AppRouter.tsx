import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import PrivateRoutes from './PrivateRoutes';

import { Loadable } from '@/shared/components/common';
import AuthRoutes from './AuthRoutes';

const AppLayout = Loadable(
  lazy(() => import('@/app/layouts/AppLayout/AppLayout'))
);
const AuthLayout = Loadable(
  lazy(() => import('@/auth/layout/AuthLayout/AuthLayout'))
);

const Home1 = Loadable(lazy(() => import('@/app/home/pages/Home1')));
const LoginPage = Loadable(
  lazy(() => import('@/auth/pages/LoginPage/LoginPage'))
);

const AppRouter = createBrowserRouter([
  ////* Auth
  {
    path: '/auth',
    element: (
      <AuthRoutes>
        <AuthLayout />
      </AuthRoutes>
    ),
    children: [{ path: 'login', element: <LoginPage /> }],
  },

  ////* Private ---------------------
  {
    path: '/',
    element: (
      <PrivateRoutes>
        <AppLayout />
      </PrivateRoutes>
    ),
    children: [
      //////////* Home ------------
      {
        index: true,
        element: <Home1 />,
      },
      {
        path: 'del',
        element: <div>del</div>,
      },
      {
        path: 'asdsadd',
        element: <div>Some path 3</div>,
      },
    ],
  },
]);

export default AppRouter;
