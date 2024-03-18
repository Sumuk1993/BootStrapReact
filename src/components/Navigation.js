import React from 'react'
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function Navigation() {
    return (
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Link to="/home" className="nav-link">Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="register" className="nav-link">Register</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="login" className="nav-link">Login</Link>
            </Nav.Item>
        </Nav>
    )
}
