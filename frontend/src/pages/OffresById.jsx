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
            <div className={`rond card-${offre.id - 1}`}>{offre.name}</div>
            <div className="">{offre.value} pts</div>
            <div>{offre.surname}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffresById;
