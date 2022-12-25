import React from "react";

export function Header() {
    return (

        <nav className="Header">
            <div className="top-left-navbar">
                <ul className="top-left-list">
                    <li className="list-item company-name">Shortly</li>
                    <li className="list-item"><a className="list-item-link" href="https://www.google.com">Features</a></li>
                    <li className="list-item"><a className="list-item-link" href="https://www.google.com">Pricing</a></li>
                    <li className="list-item"><a className="list-item-link" href="https://www.google.com">Resources</a></li>
                </ul>
            </div>
            <div className="top-right-navbar">
                <ul className="top-right-list">
                    <li className="list-item"><a className="list-item-link list-item-link-background" href="https://www.google.com">Login</a></li>
                    <li className="list-item"><a className="list-item-link list-item-link-background" href="https://www.google.com">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    )
}