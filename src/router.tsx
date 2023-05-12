import { createBrowserRouter } from 'react-router-dom';
import Providers from '@/components/Providers';
import RootLayout from '@/layouts/RootLayout';

// IMPORT PAGES
import Home from '@/page/Home';
import NotFound from '@/page/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Providers />,
    children: [
      {
        path: '/',
        element: <RootLayout />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
        ],
      },
      {
        path: '*',
        element: <RootLayout />,
        children: [
          {
            path: '*',
            element: <NotFound />,
          },
        ],
      },
    ],
  },
]);

export default router;
