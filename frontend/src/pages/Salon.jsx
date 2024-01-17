import { NavLink } from "react-router-dom";

function Salon() {
  return (
    <div className="salon-container">
      <div className="image-container">
        <img src="public/images/image_salon.png" alt="salon" />
      </div>
      <div className="salon-rightside">
        <div>
          <p>MON COMPTE FIDÈLITÈ</p>
          <p>NOM DU SALON</p>
          <p>MEMBRE PRIVILÈGE</p>
        </div>
        <div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <p>20 000 points atteints</p>
          <p>Bénéficiez de votre avantage fidélité ! </p>
        </div>

        <div>
          <div>
            <p>Prochain statut </p>
            <p>MEMBRE ELITE</p>
            <img
              src="/images/logo-beauty-partner.jpg"
              alt="logo-beauty-partner"
            />
            <NavLink>Dècouvrir ici</NavLink>
            <div className="image-fidelite">
              <img src="/images/image_member_elite.png" alt="member-elite" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Salon;
