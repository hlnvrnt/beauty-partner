import React from "react";

function Partenaires() {
  return (
    <div className="marques">
      <div className="marques-top">
        <div className="marques-caption-container">
          <img src="/images/caption.png" alt="citation" />
        </div>
        <p className="discover">Découvrez</p>
      </div>
      <div className="marques-content-container">
        <div className="content-texts">
          <h3>Focus sur</h3>
          <h2>Nos quatre divisions</h2>
          <p>
            La flottille mondiale de marques de L'Oréal est organisée en 4
            divisions complémentaires qui développent chacune une vision
            spécifique de l'univers beauté par segments de consommation :
            Division Produits Professionnels, Division Produits Grand Public,
            L'Oréal Luxe et Division Cosmétique Active.
          </p>
        </div>
        <div className="content-img-container">
          <div className="img-container">
            <img src="/images/loreal_luxe.jpg" alt="luxe" />
            <p>L'Oréal Luxe</p>
          </div>
          <div className="img-container">
            <img src="/images/loreal_grandpublic.webp" alt="grand public" />
            <p>L'Oréale Grand Public</p>
          </div>
          <div className="img-container">
            <img src="/images/loreal_beautedermatologique.webp" alt="beauté" />
            <p>Beauté dermatologique</p>
          </div>
          <div className="img-container">
            <img src="/images/loreal_produitspro.jpg" alt="produits pro" />
            <p>Produits Professionnels</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partenaires;
