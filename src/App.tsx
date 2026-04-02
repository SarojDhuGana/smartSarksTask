import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import CTABanner from "./components/CTABanner";
import Timeline from "./components/Timeline";
import Service from "./ShowCase/Services/page";
import ServiceDetails from "./ShowCase/Services/[id]/page";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about" , element: <About /> },
      { path: "/banner" , element: <CTABanner /> },
      { path: "/contact", element: <Contact /> },
      {path: "/service", element: <Service/>},
      {path: '/service/:id', element: <ServiceDetails/> },
      {path: "/timeline", element: <Timeline/>}
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}