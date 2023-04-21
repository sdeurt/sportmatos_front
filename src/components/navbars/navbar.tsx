import { NavLink } from "react-router-dom";
import "./NavBar.scss";


const NavBar = () => {
  return (
    <nav>
      <ul className="d-flex justify-content-around p-0">
        <li>
          <NavLink to="accueil">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="apropos ">Apropos</NavLink>
        </li>
        <li>
          <NavLink to="form">Form</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;