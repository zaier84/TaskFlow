import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import NewTask from "./components/NewTask";
import EditTask from "./components/EditTask";
import AllTasks from "./components/AllTasks";
import CompletedTasks from "./components/CompletedTasks";
import ProjectList from "./components/ProjectList";
import ProjectTasks from "./components/ProjectTasks";
import Settings from "./components/Settings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
                handle: { title: "Dashboard" },
            },
            {
                path: "/new-task",
                element: <NewTask />,
                handle: { title: "New Task" },
            },
            {
                path: "/edit-task/:taskId",
                element: <EditTask />,
                handle: { title: "Edit Task" },
            },
            {
                path: "/all-tasks",
                element: <AllTasks />,
                handle: { title: "All Tasks" },
            },
            {
                path: "/projects",
                element: <ProjectList />,
                handle: { title: "Projects" },
            },
	    {
		path: "/project/:projectId",
                element: <ProjectTasks />,
                handle: { title: "Project" },
            },
            {
                path: "/completed-tasks",
                element: <CompletedTasks />,
                handle: { title: "Completed Tasks" },
            },
	    {
                path: "/settings",
                element: <Settings />,
                handle: { title: "Settings" },
            }
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
