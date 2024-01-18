/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import Modale from "../components/Modale";

export const offrebyid = async ({ params }) => {
  try {
    const offreId = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/events/${params.id}`
    );

    return offreId.data[0];
  } catch (e) {
    console.error(e);
    return [];
  }
};

function OffresById() {
  const offre = useLoaderData(offrebyid);

  const [showModale, setShowModale] = useState(false);

  const handleModale = () => {
    setShowModale(true);
  };

  return (
    <div className="container-offrebyid">
      <div>
        <Link to="/offres">
          <p>RETOUR</p>
        </Link>
        <div>
          <div className="flex-rond">
            <div className="title">
              <div className={`rond card-${offre.id - 1}`}>
                <h1>{offre.name}</h1>
                <p>{offre.surname}</p>
              </div>
          
            </div>
            <div className="trait" />
            <div className="img-description">
              <div className="img-offre">
                <img
                  className="border-img"
                  src={`${import.meta.env.VITE_BACKEND_URL}${offre.image}`}
                />
              </div>
              <div className="desc-pro">
                <div className="description">{offre.description}</div>
                <br />
                <div className="programe">
                  {offre.program.split("\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className="button-loreal">
                  <button
                    className="button"
                    type="button"
                    onClick={handleModale}
                  >
                    Commander l'offre
                  </button>
                </div>
                {showModale && (
                  <Modale isOpen={showModale} setShowModale={setShowModale} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffresById;
