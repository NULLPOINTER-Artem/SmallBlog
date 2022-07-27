import React from "react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
    return (
        <nav className="container navbar">
            <Link className="navbar__link" to="/">Home</Link>
            <Link className="navbar__link" to="/posts">Posts</Link>
        </nav>
    )
}