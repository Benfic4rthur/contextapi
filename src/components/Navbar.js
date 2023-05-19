import './Navbar.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return <nav>
    <NavLink to="/">Home</NavLink> {/* Usasse o NavLink para navegar entre as páginas e ter o efeito ativo */}
    <NavLink to="/page2">About</NavLink>
    <NavLink to="/page3">Products</NavLink>
    </nav>;
};

export default Navbar;
