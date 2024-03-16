"use client";
import React from "react";

export default function Navbar() {
    const token = localStorage.getItem('authToken');

    return <nav className="nav">
        <a href="/" className="site-title">Beat Link</a>

        <div>
        <ul id="navbar">
            <li>
                <a href="/">HOME</a>
            </li>
            <li>
                <a href="/about">ABOUT</a>
            </li>
            <li>
                <a href="/explore">EXPLORE</a>
            </li>
            <li>
                <a href="/contact">CONTACT</a>
            </li>
            <li>
                {token ? <a href="/logout">LOGOUT</a> : <a href="/login">LOGIN</a>}
            </li>
        </ul>
        </div>

    </nav>

}

