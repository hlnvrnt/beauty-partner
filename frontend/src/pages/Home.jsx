import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="image-container">
        <img src="images/imageHome.webp" alt="home" />
      </div>
      <div className="images-logo-container">
        <div className="bp-image-container">
          <img src="images/home_logo.png" alt="logo-beautypartner" />
        </div>
        <div className="beautypartner-image-container">
          <img src="images/beautypartner_logo.webp" alt="" />
        </div>
        <span style={{ fontWeight: "bold", fontSize: "22px" }}>
          Bienvenue chez Beauty Partner, là où l'élégance rencontre
          l'innovation.{" "}
        </span>
        <p className="description">
          Adhérez dès maintenant à notre programme exclusif et découvrez un
          univers crée sur mesure pour votre salon de coiffure, réservé à nos
          membres privilégiés. Profitez d'avantages personnalisés tels que des
          coffrets-cadeaux, des promotions exclusives, des invitations aux
          soirées VIP et des séminaires réservés aux initiés. Offrez à vos
          clients un référencement sur leurs produits favoris grâce à notre
          borne d'intelligence artificielle intégrée à votre profil
          professionnel. Avec Beauty Partner, votre succès devient notre
          priorité.
        </p>

        <p className="second-description">
          {" "}
          <NavLink to="/register"> Rejoignez-nous</NavLink> pour vivre la beauté
          de manière unique.
        </p>
        <div className="btn-avantage">
          <button className="souscription" type="button">
            <NavLink to="/offres">
              Profitez de vos avantages dès maintenant
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
