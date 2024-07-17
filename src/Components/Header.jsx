import { Link, NavLink } from 'react-router-dom';
import logo from "../Assets/LOGO.png";
import "../Style/header.scss";

function Header() {
    const ActiveStyle = { textDecoration: "underline" };

    // Création tableau
    const menuItems = [
        { to: "/", label: "Accueil" },
        { to: "/about", label: "À propos" }
    ];

    const menuItem = ({ to, label }) => (
        <li key={to}>
            <NavLink to={to} style={({ isActive }) => isActive ? ActiveStyle : undefined}>
                {label}
            </NavLink>
        </li>
    );

    // Affichage
    return (
        <header>
            <Link to="/">
                <img src={logo} alt='Logo du site Kasa' />
            </Link>
            <nav>
                <ul>{menuItems.map(menuItem)}</ul>
            </nav>
        </header>
    );
}

export default Header;
