import { Link, useNavigate } from "react-router-dom";
import { Products } from "../components/products/product";

export default function Accueil() {

  const navigate = useNavigate();

  return (
    <>

     {/*  <Link to="/accueil"></Link> */}
      < Link to="/products"></Link>

      <div >

        <div id="carouselExampleIndicators" className="carousel slide mx-auto" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`./imgsport/row-kettlebell-girya-weights-gym.jpg`} className="d-block w-100" alt="boxjump" height="500px" onClick={() => navigate("/products")}/>
            </div>

            <div className="carousel-item">
              <img src={`./imgsport/Ensemble-crossfit.jpg`} className="d-block w-100" alt="crossfit" height="500px"  onClick={() => navigate("/products")}/>
            </div>

            <div className="carousel-item">
              <img src={`./imgsport/Dumbbell-and-weight-plates.jpg`} className="d-block w-100" alt="poids" height="500px" onClick={() => navigate("/products")} />
            </div>

            <div className="carousel-item">
              <img src={`./imgsport/set-sports-equipment-fitness-ball.jpg`} className="d-block w-100" alt="poids" height="500px" onClick={() => navigate("/products")} />
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>




  );

};

