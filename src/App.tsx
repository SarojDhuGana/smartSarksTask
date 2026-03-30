
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about" , element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}