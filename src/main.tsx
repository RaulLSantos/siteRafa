import React from "react"
import { createRoot } from "react-dom/client"
import { Router, RouterProvider } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"

const router = new Router({ routeTree })

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)