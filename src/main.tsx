import React from "react"
import { createRoot } from "react-dom/client"
import { Router, RouterProvider } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"
import "./styles.css"

const routerBasepath = import.meta.env.BASE_URL.replace(/\/$/, "") || "/"
const router = new Router({ routeTree, basepath: routerBasepath })

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
