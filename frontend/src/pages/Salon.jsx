import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

function Salon() {
  const navigate = useNavigate();
  const { userInfos, setUserInfos } = useUser();
  const handleLogout = () => {
    setUserInfos(null);
    navigate("/");
  };

  return (
    <div className="salon-container">
      <div className="image-container">
        <img src="images/image_salon.jpg" alt="salon" />
      </div>
      <div className="salon-rightside">
        <div>
          <div className="header">
            <div className="header-text">
              <p className="mon-compte">MON COMPTE FIDÉLITÉ</p>
              <p>{userInfos.name}</p>
              <button
                type="button"
                className="button-logout"
                onClick={handleLogout}
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
        <div className="status-container">
          <p className="status-title">MEMBRE ELITE</p>
          <p>Bénéficiez de votre avantage fidélité ! </p>

          <ul className="progressbar">
            <li className="complete" />
            <li className="complete" />
            <li className="complete" />
            <li className="active">50 000 points</li>
            <li />
            <li />
          </ul>
        </div>

        <div className="salon-right-bottom">
          <div className="next-status">
            <div className="next-status-left">
              <div className="text-next-status">
                <p>NOUVEAUTÉ</p>
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
                <Link to="/innovation" className="button-salon">
                  Découvrir ici
                </Link>
              </div>
            </div>

            <div className="image-fidelite">
              <img src="/images/image_member_elite.jpg" alt="member-elite" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Salon;
