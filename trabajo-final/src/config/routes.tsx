import { createBrowserRouter } from "react-router-dom";
import { API } from "@/pages/API";
import { About } from "@/pages/About";
import { Catalog } from "@/pages/Catalog";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { Book } from "@/pages/Book";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    index: true,
  },
  {
    path: "/catalog",
    element: <Catalog />,
    children: [
      {
        path: "/catalog/:bookId",
        element: <Book />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/api",
    element: <API />,
  },
]);
