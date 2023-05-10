import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./navbar.css";

export default function NavBar() {

  const navigate = useNavigate()

  return (

    <nav className="nav navbar navbar-expand-sm ">


      <div className="container-fluid ">



        <img src="img-accueil/logo3.jpg" alt="logo " width="100" height="70" className="mx-2 ms-0 logo rounded" onClick={() => navigate("/")} />

        <a className="navbar-brand btn fs-3 fw-semibold text-primary" href="#" onClick={() => navigate("/apropos")}> HexEco  </a>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

          <span className="navbar-toggler-icon"></span>

        </button>

        <div className="collapse navbar-collapse justify-content-sm-evenly" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0  offset-5">


          {/*   <li className="nav-item ">
              <Link className="btn fs-6 fw-bold text-primary" to="/accueil"> Accueil </Link>
            </li>
 */}
            <li className="nav-item ">
              <Link className="btn fs-6 fw-bold text-primary" to="/login"> Se connecter </Link>
            </li>

            <li className="nav-item ">
              <Link className="btn fs-6 fw-bold text-primary" to="/products"> Produits </Link>
            </li>

            <li className="nav-item ">
              <Link className="btn fs-6 fw-bold text-primary" to="/categories"> Catégories </Link>
            </li>

            <li className="nav-item ">
              <Link className="btn fs-6 fw-semibold text-primary" to="/panier"> Panier</Link>
            </li>

          </ul>

          
        </div>


      </div>

    </nav >
  )
}
