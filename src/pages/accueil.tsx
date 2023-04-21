import { Link } from "react-router-dom";

const Accueil = () => {
  return (
    <div>
      Page Accueil
      <Link to="/details/1">Link to details</Link>
    </div>
  );
};

export default Accueil;
