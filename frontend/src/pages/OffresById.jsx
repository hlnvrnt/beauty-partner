/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

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

  return (
    <div className="container-offrebyid">
      <div>
        <h1>Offres</h1>
        <div>
          <div className="flex-rond">
            <div className={`rond card-${offre.id - 1}`}>
              <h1>{offre.name}</h1>

              <p>{offre.surname}</p>
            </div>

            <div className="img-description">
              <div className="img-offre">
                <img
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffresById;
