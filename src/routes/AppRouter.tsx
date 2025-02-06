import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
// layouts
const MainLayout = lazy(()=> import ("@layouts/MainLayout/MainLayout"));
const ProfileLayout = lazy(()=> import ("@layouts/ProfileLayout/ProfileLayout"));
// pages
const Home = lazy(()=> import ("@pages/Home"));
const Products =lazy(()=> import ("@pages/Products"));
const Cart = lazy(()=> import ("@pages/Cart/Cart"));
const Wishlist = lazy(()=> import ("@pages/Wishlist"));
const Login = lazy(()=> import ("@pages/Login"));
const Register = lazy(()=> import ("@pages/Register"));
const Profile = lazy(()=> import ("@pages/Profile"));
const Orders = lazy(()=> import ("@/pages/Orders"));
import Error from '@/pages/Error';
import LottieHandler from "@/commponents/feedback/lottieHandler/LottieHandler";
import ProtectedRoute from "@/commponents/Auth/ProtectedRoute";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const router = createBrowserRouter([
  {
    path: "/",
    element: (<Suspense fallback={<div style={{marginTop: '10%', textAlign: 'center'}}>
      <LottieHandler type='loading' message="Loading please wait ..."/>
    </div>}><MainLayout /></Suspense>),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (<Suspense fallback={<LottieHandler type='loading' 
          message="Loading please wait ..."/>}><Home /></Suspense>),
      },
      {
        path: "/ecommerce",
        element: (<Suspense fallback={<LottieHandler type='loading' 
          message="Loading please wait ..."/>}><Home /></Suspense>),
      },
      {
        path: "/cart",
        element: (<Suspense fallback={<LottieHandler type='loading' 
          message="Loading please wait ..."/>}><Cart /></Suspense>),
      },
      {
        path: "/wishlist",
        element: (<ProtectedRoute><Suspense fallback={<LottieHandler type='loading' 
          message="Loading please wait ..."/>}><Wishlist /></Suspense></ProtectedRoute>),
      },
      {
        path: "products/:prefix",
        element: (<Suspense fallback={<LottieHandler type='loading' 
          message="Loading please wait ..."/>}><Products /></Suspense>),
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Category not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "login", 
        element: (<Suspense fallback={<LottieHandler type='loading' 
          message="Loading please wait ..."/>}><Login /></Suspense>),
      },
      {
        path: "register",
        element: (<Suspense fallback={<LottieHandler type='loading' 
          message="Loading please wait ..."/>}><Register /></Suspense>),
      },
      {
        path: "profile",
        element: (<ProtectedRoute><Suspense fallback={<LottieHandler type='loading' 
          message="Loading please wait ..."/>}><ProfileLayout /></Suspense></ProtectedRoute>),
          children: [
            {
              index: true,
              element: (
                <Suspense>
                  <Profile />
                </Suspense>
              ),
            },
            {
              path: "orders",
              element: (
                <Suspense>
                  <Orders />
                </Suspense>
              ),
            },
          ],
      },
    ],
  },
]);


const AppRouter = () => {
  return  <RouterProvider router={router} /> ;
};

export default AppRouter;