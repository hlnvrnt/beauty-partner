import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";

function NavBar() {
  const { userInfos } = useUser();
  return (
    <div className="navbar">
        <div className="logo-container">
        <div className="marque">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="connexion">
          {userInfos.name ? (
            <NavLink to="/account">
              <div className="account-link">
                <p>Mon compte</p>
                <p>{userInfos.name}</p>
              </div>
            </NavLink>
          ) : (
            <div className="connexion-lien">
              <NavLink to="/login">
                <p>CONNEXION</p>
              </NavLink>
              <NavLink to="/register">
                <p>INSCRIPTION</p>
              </NavLink>
            </div>
          )}
        </div>
          <div className="img-beauty">
          <img src="/images/logo-beauty-partner.jpg" alt="logo-beauty" />
          </div>
          </div> 
      <div className="pages">
        <NavLink to="/">
          <p>ACCUEIL</p>
        </NavLink>
        <NavLink to="/offres">
          <p>NOS OFFRES</p>
        </NavLink>
        <NavLink to="/engagements">
          <p>NOS ENGAGEMENTS</p>
        </NavLink>
        <NavLink to="/partenaires">
          <p>NOS PARTENAIRES</p>
        </NavLink>
        <NavLink to="/innovation">
          <p>INNOVATION AI</p>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
