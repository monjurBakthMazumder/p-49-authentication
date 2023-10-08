import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Phones from './Component/Pages/Phones/Phones';
import Details from './Component/Pages/Phones/Details/Details';
import About from './Component/NavPage/About';
import Contact from './Component/NavPage/Contact';
import Profile from './Component/NavPage/Profile'
import AuthProvider from './Component/Provider/AuthProvider';
import Login from './Component/Authentication/Login';
import Register from './Component/Authentication/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/Products",
    element: <PrivateRoute>  <Home/></PrivateRoute>,
    children:[
      {
        path: "/Products",
        loader: () => fetch(`https://openapi.programming-hero.com/api/phones?search=a`),
        element: <PrivateRoute>  <Phones/></PrivateRoute>
      },
      {
        path: "/Products/iphone",
        loader: () => fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`),
        element: <PrivateRoute>  <Phones/></PrivateRoute>
      },
      {
        path: "/Products/samsung",
        loader: () => fetch(`https://openapi.programming-hero.com/api/phones?search=samsung`),
        element: <PrivateRoute>  <Phones/></PrivateRoute>
      },
      {
        path: "/Products/huawei",
        loader: () => fetch(`https://openapi.programming-hero.com/api/phones?search=huawei`),
        element: <PrivateRoute>  <Phones/></PrivateRoute>
      },
      {
        path: "/Products/oppo",
        loader: () => fetch(`https://openapi.programming-hero.com/api/phones?search=oppo`),
        element: <PrivateRoute>  <Phones/></PrivateRoute>
      },
    ]
  },
  {
    path:'/Products/:id',
    loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/phone/${params.id}`),
    element: <PrivateRoute> <Details/></PrivateRoute>
  },
  {
    path:'/',
    element:<About/>
  },
  {
    path:'/contact',
    element:<PrivateRoute> <Contact/></PrivateRoute>
  },
  {
    path:'/profile',
    element:<PrivateRoute><Profile/></PrivateRoute>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
