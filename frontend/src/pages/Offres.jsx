import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Offre() {
  const [offre, setOffre] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api//events`)
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
        <h1>NOUVEAUTES</h1>
        <div className="offre-nouveaute1">;</div>
      </div>
      <div className="container-offre">
        <h1>NOS OFFRES</h1>
        <div className="offre">
          {offre.map((offres, index) => (
            <div className="offre-1">
              <div className={`rond card-${index}`}>{offres.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
