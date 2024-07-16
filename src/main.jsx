import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Layout/Root/Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import AuthProvider from './Provider/AuthProvider/AuthProvider';
import MyBookings from './Pages/MyBookings/MyBookings';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import BookingItemForm from './Pages/BookingPageForm/BookingItemForm';
import ErrorPage from './Pages/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/booking/:id',
        element: <PrivateRoutes><BookingItemForm></BookingItemForm></PrivateRoutes>,
      },
      {
        path: '/myBookings',
        element: <PrivateRoutes><MyBookings></MyBookings></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='xl:max-w-6xl lg:max-w-4xl md:max-w-2xl px-4 md:px-0 mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </div>
)
