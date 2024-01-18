import { React, useRef, useState } from "react";
// import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";

function Login() {
  // todo : importer le setter "setUserInfos" via Useconext
  const { setUserInfos, userInfos } = useUser();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [motDePasseVisible, setMotDePasseVisible] = useState(false);
  const toggleMotDePasseVisibility = () => {
    setMotDePasseVisible(!motDePasseVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const res = await axios.post("http://localhost:3310/api/login", {
        inputEmail: email,
        inputPassword: password,
      });
      if (res.status === 200) {
        setUserInfos(res.data);
        navigate("/account");
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
              Vous n'êtes pas encore membre ?
              <em>
                {" "}
                <NavLink to="/register"> S'inscrire</NavLink>
              </em>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="fields">
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="email" ref={emailRef} />
              </div>
              <div className="fields">
                <label htmlFor="password">Mot de passe</label>
                <input
                  type={motDePasseVisible ? "text" : "password"}
                  name=""
                  id="password"
                  ref={passwordRef}
                />
                <img
                  src={
                    motDePasseVisible
                      ? "/images/mdpUnsee.png"
                      : "/images/mdpSee.png"
                  }
                  alt="eye"
                  className="mdp"
                  onClick={toggleMotDePasseVisibility}
                  role="presentation"
                />
              </div>
              <button type="submit">Se connecter</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
