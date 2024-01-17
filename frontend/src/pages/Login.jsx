import { React } from "react";
// import { Navigate } from "react-router-dom";
// import axios from "axios";
// import { useUser } from "../context/UserContext";

function Login() {
  // todo : importer le setter "setUserInfos" via Useconext

  return (
    <div className="login">
      <div className="login-img-container">
        <img src="/images/login_picture.png" alt="women" />
      </div>
      <div className="login-connexion-container">
        <div className="login-content-connexion-background">
          <div className="login-content-connexion">
            <div>
              <h2>Connexion</h2>
              <p className="under-title">L'Oréal BeautyPartner</p>
            </div>
            <p>
              Vous n'êtes pas encore membre ?<em> S'inscrire</em>
            </p>
            <form>
              <div className="fields">
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="email" />
              </div>
              <div className="fields">
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="" id="password" />
              </div>
              <button type="submit">se connecter</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
