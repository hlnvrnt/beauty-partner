import React from "react";

function Modale({ isOpen, setShowModale }) {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h1>Merci pour votre commande</h1>
        <h2>Un email de confirmation vous sera envoyé</h2>
        <button onClick={() => setShowModale(false)}>Fermer</button>
        <p>
          Vous serez décrédité de vos points à la confirmation d'envoi de votre
          commande.
        </p>
      </div>
    </div>
  );
}

export default Modale;
