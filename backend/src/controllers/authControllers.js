const tables = require("../tables");

// todo : ajouter next pour le validator

const login = async (req, res) => {
  const salon = await tables.Salon.getByMail(req.body.inputEmail); // permet d'appeler un model qui va interroger la BDD pour sortir les infos du users via son adresse e-mail
  const password = req.body.inputPassword; // on récupère le password fourni par le front (via méthode POST via le body)
  console.log(password)
  console.log(salon)
  if (salon?.password === password) {
    // rappel : le ? permet de couvrir le cas de undefined
    // on compare le password de la BDD de notre user avec celui du front
    res.status(200).send(salon);
  } else {
    res.status(400).send("incorrect email or password");
  }
};

module.exports = { login };
