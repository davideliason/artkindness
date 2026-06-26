import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ArtKindness AI</div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/art">Art</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}