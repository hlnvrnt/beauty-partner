import { NavLink } from "react-router-dom";
import { useState } from "react";
import Modale from "../components/Modale";

function InnovationAI() {
  const [showModale, setShowModale] = useState(false);

  const handleModale = () => {
    setShowModale(true);
  };

  return (
    <div className="innovation-container">
      <div className="img-container">
        <img src="images/innovation.jpg" alt="innovation" />
      </div>

      <div className="content-wrapper">
        <div className="header-wrapper">
          <h1>
            <span style={{ color: "#44546A" }}>Innovation</span>{" "}
            <span style={{ color: "#28A8A0" }}>A</span>
            <span style={{ color: "#508FBB" }}>I</span>
          </h1>
        </div>

        <p>
          Découvrez <span style={{ fontWeight: "bold" }}>INNOVATION AI</span>,
          l'avenir de la personnalisation capillaire avec notre borne
          d'Intelligence Artificielle intégrée au salon de coiffure.
          <br></br>
          Offrant une expérience sur mesure, cette technologie innovante permet
          à nos clients de choisir le produit parfait en fonction de leurs
          critères uniques. Que ce soit le type de cheveux, la texture, les
          besoins spécifiques ou les préférences , notre borne AI analyse ces
          informations pour recommander les produits les mieux adaptés à votre
          clientèle.<br></br>
          Offrez une expérience de soin capillaire personnalisée et immersive,
          redéfinissant ainsi les normes de l'excellence en matière de coiffure.
        </p>
        <div className="footer-container">
          <p>Une offre réservée au membres Elite</p>
          <img src="images/logo-beauty-partner.jpg" alt="beautypartner" />
        </div>
        <div className="button-loreal">
          <button className="button" type="button" onClick={handleModale}>
            Commander la borne
          </button>
        </div>
        {showModale && (
          <Modale isOpen={showModale} setShowModale={setShowModale} />
        )}
        <NavLink to="/borne">
          <h3>Cliquez ici pour tester notre borne AI </h3>
        </NavLink>
      </div>
    </div>
  );
}

export default InnovationAI;
