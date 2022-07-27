import React from "react";
import { Outlet } from 'react-router-dom';
import NavigationBar from "@/components/NavigationBar";
import AppFooter from "@/components/AppFooter";

export default function Layout() {
    return (
        <>
            <NavigationBar />

            <main className="container">
                <Outlet />
            </main>

            <AppFooter />
        </>
    )
}