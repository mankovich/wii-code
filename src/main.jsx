import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from './contexts/userContext';
import './index.css';

import App from "./App";
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import EditorPage from './pages/EditorPage'
import ProfilePage from './pages/ProfilePage'
import CollabSignInPage from './pages/CollabSignInPage'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'profile',
          element: <ProfilePage />,
        },
        {
          path: 'editor/:ownerId/:roomId',
          element: <EditorPage />,
        },
        {
            path: 'collab-sign-in',
            element: <CollabSignInPage />
        }
      ],
    },
  ]);

//Render RouterProvider component
ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider> 
    <RouterProvider router={router} />
  </UserProvider>
);