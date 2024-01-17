import { useState} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useUser } from "../context/UserContext";

function Register() {
  const { setUserInfos } = useUser();

  const [newSalon, setNewSalon] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [submittedUser, setSubmittedUser] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");

    if (!newSalon.name || !newSalon.email || !newSalon.password) {
      setErrorMessage("Veuillez remplir tous les champs");
    }

    if (!newSalon.email.includes("@")) {
      setErrorMessage("Veuillez fournir une adresse e-mail valide");
    } else {
      try {
        await axios.post("http://localhost:3310/api/salon", newSalon);
        const res2 = await axios.post("http://localhost:3310/api/login", {
          // on INSERT dans la DB avec les infos saisies
          inputEmail: newSalon.email,
          inputPassword: newSalon.password,
        });
        setUserInfos(res2.data);
        setSubmittedUser([...submittedUser, newSalon]);
        setNewSalon({ name: "", email: "", password: "" });
        setSuccessMessage(
          `Félicitations ${res2.data.pseudo}, votre compte a bien été créé !`
        );
      } catch (err) {
        console.error(err);
        setErrorMessage("Cet utilisateur existe déjà.");
        setNewSalon({ name: "", email: "", password: "" });
      }
    }
  };
  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="register-container">
      <img src="/images/Rectangle 43.png" alt="register" />
      <div className="formulaire">
        <h1>Formulaire d'inscription</h1>
        <h2>L'Oréal Beautypartner</h2>
        <NavLink to="/login">
          <p>Déjà membre partenaire ? Connectez-vous</p>
        </NavLink>
        {errorMessage !== "" && (
          <div className="message">
            <p className="error">{errorMessage}</p>
          </div>
        )}
        {successMessage !== "" && (
          <div className="message">
            <p className="error">{successMessage}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nom du salon"
            placeholder="Nom du salon"
            value={newSalon.name}
            onChange={(e) => setNewSalon({ ...newSalon, name: e.target.value })}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={newSalon.email}
            onChange={(e) =>
              setNewSalon({ ...newSalon, email: e.target.value })
            }
          />
          <div className="button-password">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Mot de passe"
              value={newSalon.password}
              onChange={(e) =>
                setNewSalon({ ...newSalon, password: e.target.value })
              }
            />
            <button type="button" onClick={PasswordVisibility}>
              {showPassword ? "Masquer" : "Afficher"}
            </button>
          </div>

          <div className="signin-button">
            <button type="submit">INSCRIPTION</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
