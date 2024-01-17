import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

export const offrebyid = async ({ params }) => {
  try {
    const offreId = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/events/${params.id}`
    );

    return offreId.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

function OffresById() {
  const offre = useLoaderData(offrebyid);

  return (
    <div>
      <div>
        <h1>Offres</h1>
        <div>
          {offre.map((offres) => (
            <div>
              <div>{offres.name}</div>
              <div>{offres.value}</div>
              <div>{offres.surname}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OffresById;
