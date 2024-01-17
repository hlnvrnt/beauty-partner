import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useUser } from "../context/UserContext";

function Register() {
  const { setUserInfos } = useUser();

  const [newSalon, setNewSalon] = useState({
    name: "",
    address: "",
    email: "",
    phone_number: "",
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
    <div className="login">
      <div className="login-img-container">
        <img src="/images/login_picture.png" alt="women" />
      </div>
      <div className="login-connexion-container">
        <div className="login-content-connexion-background">
          <div className="login-content-connexion">
            <div>
              <h2>Formulaire d'inscription</h2>
              <p className="under-title">L'Oréal BeautyPartner</p>
            </div>
            <p>
              Déjà membre partenaire ?<em> Connectez-vous</em>
            </p>
            <form>
            <div className="fields">
                <label htmlFor="name">Nom du salon</label>
                <input
                  type="name"
                  name=""
                  id="name"
                  value={newSalon.name}
                  onChange={(e) =>
                    setNewSalon({ ...newSalon, name: e.target.value })
                  }
                />
              </div>
              <div className="fields">
                <label htmlFor="adresse">Adresse</label>
                <input
                  type="adresse"
                  name=""
                  id="adresse"
                  value={newSalon.adresse}
                  onChange={(e) =>
                    setNewSalon({ ...newSalon, adresse: e.target.value })
                  }
                />
              </div>
              <div className="fields">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name=""
                  id="email"
                  value={newSalon.email}
                  onChange={(e) =>
                    setNewSalon({ ...newSalon, email: e.target.value })
                  }
                />
              </div>
              <div className="fields">
                <label htmlFor="phone number">N° de téléphone</label>
                <input
                  type="phone number"
                  name=""
                  id="phone number"
                  value={newSalon.phone_number}
                  onChange={(e) =>
                    setNewSalon({ ...newSalon, phone_number: e.target.value })
                  }
                />
              </div>
              <div className="fields">
                <label htmlFor="password">Mot de passe</label>
                <input
                  type="password"
                  name=""
                  id="password"
                  value={newSalon.password}
                  onChange={(e) =>
                    setNewSalon({ ...newSalon, phassword: e.target.value })
                  }
                />
              </div>
              <button type="submit">S'incrire</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
