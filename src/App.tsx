import './App.css';
import { BrowserRouter, Form, Link, Route, Routes } from "react-router-dom";
import Accueil from './pages/accueil';
import Apropos from './pages/apropos';



function App() {
  return (
    <>
      <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/apropos">Apropos</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>

          <hr />
        {/*  <NavBar />   */}
        <Routes>
          <Route path="accueil" element={<Accueil />} />
          <Route path="apropos" element={<Apropos/>} />
          <Route path="form" element={< Form />} />
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
