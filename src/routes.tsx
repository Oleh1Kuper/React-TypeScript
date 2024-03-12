import { createBrowserRouter } from 'react-router-dom';
import { GameDetailPage } from './pages/GameDetailPage/GameDetailPage';
import { Layout } from './pages/Layout/Layout';
import { HomePge } from './pages/HomePge/HomePge';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePge /> },
      { path: 'games/:slug', element: <GameDetailPage /> },
    ],
  },
  { path: '*', element: <ErrorPage /> },
]);
