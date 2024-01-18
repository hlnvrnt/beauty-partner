import { React, useRef } from "react";
// import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useUser } from "../context/UserContext";

function Login() {
  // todo : importer le setter "setUserInfos" via Useconext
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const res = await axios.post("http://localhost:3310/api/login", [
        email,
        password,
      ]);
      if (res.status === 200) {
        navigate("/offres");
      }
    } catch (e) {
      console.info(e);
    }
  };

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
            <form onSubmit={handleSubmit}>
              <div className="fields">
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="email" ref={emailRef} />
              </div>
              <div className="fields">
                <label htmlFor="password">Mot de passe</label>
                <input
                  type="password"
                  name=""
                  id="password"
                  ref={passwordRef}
                />
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
