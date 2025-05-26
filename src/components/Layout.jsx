import React from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";
import NewButton from "./NewButton";

function Layout() {
    return (
        <>
            <div className="dark flex w-full">
                <Sidebar />
                <div className="w-full dark:text-white dark:bg-gray-800">
                    <Header />
                    <div className="max-h-[80%] flex justify-center flex-col items-center w-full">
                        <Outlet />
                    </div>
                </div>
                <NewButton />
            </div>
        </>
    );
}

export default Layout;
