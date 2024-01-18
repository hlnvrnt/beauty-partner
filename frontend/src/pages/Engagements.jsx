import React from "react";

function Engagements() {
  return (
    <div className="engagement-page">
      <div className="engagement-container">
        <img src="/images/engagement.jpg" alt="hero" />
        <div className="title">
          <h1>Nos Engagements et Nos Responsabilités</h1>
          <p>Faire tout ce qui est en notre pouvoir pour être exemplaire</p>
        </div>
      </div>
      <div className="first-container">
        <div className="text">
          <h2>Vers un business model toujours plus responsable et durable</h2>
          <p>
            Nos engagements s’articulent autour de trois piliers :
            l’environnement, l’Humain, nos produits. Nous nous mobilisons chaque
            jour pour atteindre nos objectifs dans chacun de ces domaines. Parce
            que nous nous sommes engagés à faire tout ce qui est en notre
            pouvoir pour être exemplaires.
          </p>
        </div>
        <div className="photos">
          <img src="/images/river.jpg" alt="nature" />
          <img src="/images/humain.jpg" alt="humain" />
          <img src="/images/produits.jpg" alt="produit" />
        </div>
      </div>
      <div className="second-container">
        <div className="photos2">
          <img src="/images/planete.jpg" alt="nature" />
        </div>
        <div className="text2">
          <h2>Nos Engagements pour 2030</h2>
          <p>
            Nous avons fixé nos objectifs 2030 en matière de climat, d’eau, de
            biodiversité et de ressources naturelles en fonction de ce que les
            experts scientifiques exigent et de ce dont notre planète a besoin.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Engagements;
