/* eslint-disable prefer-template */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Offre() {
  const [offre, setOffre] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/events`)
      .then((res) => {
        setOffre(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container-page-offre">
      <div className="nouveaute-offre">
        <h1>NOUVEAUTÉS</h1>
        <div className="rond-nouveauté">
          {offre.map(
            (offres, index) =>
              (index === 1 || index === 5) && (
                <div className="rond-nouveauté-bis">
                  <div className={`rond card-${index}`}>{offres.name}</div>
                </div>
              )
          )}
        </div>
      </div>
      <div className="container-offre">
        <h1>NOS OFFRES</h1>
        <div className="offre">
          {offre.map((offres, index) => (
            <div className="offre-1">
              <div className="name">
                <div className={`rond card-${index}`}>{offres.name}</div>
              </div>
              <div className="points-offre">
                <h2>{offres.value} pts</h2>
                <h3>{offres.surname}</h3>
                <Link to={`/OffresById/${offres.id}`}>
                  <p>Découvrez-ici</p>
                </Link>
                <button className="achat">Acheter</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
