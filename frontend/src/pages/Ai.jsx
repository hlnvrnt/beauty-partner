import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Ai() {
  return (
    <div className="container-response">
      <div className="borne-wrapper">
        <div className="form-container">
          <h1>
            <span style={{ color: "#44546A" }}>Innovation</span>{" "}
            <span style={{ color: "#28A8A0" }}>A</span>
            <span style={{ color: "#508FBB" }}>I</span>
          </h1>
          <div className="info">
            <h2>Produits Recommandés de L'Oréal Professionnel :</h2>
            <section>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(50)
                    .typeString(
                      "<span><li>Le shampoing Curl Expression<br></br>Le Masque Curl expression<br></br>La crème-en-mousse Curl expression<br></br>Le soin raviveur de boucles Curl expression</li></span>"
                    )
                    .pauseFor(300)

                    .start();
                }}
              />
            </section>
          </div>

          <div className="coffret-container">
            <img src="/images/coffret-trio-curl-expression.jpg" alt="coffret" />
          </div>
          <div className="button-loreal">
            <button className="button" type="submit">
              <NavLink
                to="https://www.lorealprofessionnel.fr/soin-du-cheveu/curl-expression"
                target="blank"
              >
                Découvrir-ici
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ai;
