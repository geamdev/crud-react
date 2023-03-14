import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Layout from "./Components/Layout/Layout";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <Layout /> },
  { path: "/clientes/nuevo", element: <Layout /> }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
