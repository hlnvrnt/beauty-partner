function Borne() {
  return (
    <div className="container-borne">
      <div className="borne-wrapper">
        <div className="form-container">
          <h1>
            <span style={{ color: "#44546A" }}>Innovation</span>{" "}
            <span style={{ color: "#28A8A0" }}>A</span>
            <span style={{ color: "#508FBB" }}>I</span>
          </h1>
          <form className="input-info">
            <p>Quel est votre nature de cheveux ?</p>
            <input
              type="text"
              className="hair"
              placeholder="Entrez votre nature de cheveux ici"
            />
            <p>Quel problème rencontrez-vous ?</p>
            <input
              type="text"
              className="hair"
              placeholder="Décrivez votre problème ici"
            />
          </form>
          <button className="validate" type="submit">
            VALIDER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Borne;
