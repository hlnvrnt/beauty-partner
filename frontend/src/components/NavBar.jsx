import { NavLink } from 'react-router-dom';
// import { useUser } from "../context/UserContext";
function NavBar(){
 // const { userInfos } = useUser();
  return (
    <div className="navbar">
      <div className="marque">
        <img src="/assets/images/logo.jpg" alt="logo"/>
        <h1>BEAUTY PARTNER</h1>
      </div>
      <div className="connexion">
        <NavLink to="/login">
          <p>CONNEXION</p>
        </NavLink>
        <NavLink to="/register">
          <p>INSCRIPTION</p>
        </NavLink>
      </div>
      <NavLink to="/news">
        <p>NOUVEAUTES</p>
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
  );
};

export default NavBar;