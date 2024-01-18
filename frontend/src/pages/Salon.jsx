import { NavLink } from "react-router-dom";

function Salon() {
  return (
    <div className="salon-container">
      <div className="image-container">
        <img src="public/images/image_salon.png" alt="salon" />
      </div>
      <div className="salon-rightside">
        <div>
          <div className="header">
            <div className="header-text">
              <p className="mon-compte">MON COMPTE FIDÉLITÉ</p>
              <p>NOM DU SALON</p>
            </div>
          </div>
        </div>
        <div className="status-container">
          <p className="status-title">MEMBRE PRIVILÈGE</p>
          <p>Bénéficiez de votre avantage fidélité ! </p>

          <ul className="progressbar">
            <li className="complete" />
            <li className="complete" />
            <li className="complete" />
            <li className="active">20 000 points atteints</li>
            <li />
            <li />
          </ul>
        </div>

        <div className="salon-right-bottom">
          <div className="next-status">
            <div className="next-status-left">
              <div className="text-next-status">
                <p>Prochain statut </p>
              </div>
              <div className="text-image-next-status">
                <p>MEMBRE ELITE</p>
                <div>
                  <img
                    src="/images/logo-beauty-partner.jpg"
                    alt="logo-beauty-partner"
                  />
                </div>
              </div>
              <div className="button-container">
                <NavLink className="button-salon">Dècouvrir ici</NavLink>
              </div>
            </div>

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
