import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import TableUtilPage from "./pages/TableUtilPage";
import { MathJaxContext } from "better-react-mathjax";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "/table",
        element: <TableUtilPage />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <MathJaxContext>
            <RouterProvider router={router} />
        </MathJaxContext>
    </StrictMode>
);
