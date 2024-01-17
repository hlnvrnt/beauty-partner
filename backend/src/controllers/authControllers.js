const tables = require("../tables");

const argon2 = require("argon2");

// todo : ajouter next pour le validator

const login = async (req, res) => {
  try{
    const user = await tables.user.getByMail(req.body.inputEmail); // permet d'appeler un model qui va interroger la BDD pour sortir les infos du users via son adresse e-mail
    console.log('auth controllers', user)
    if (user == null) {
      res.status(200).send(user);
      return;
    } 
    const verified = await argon2.verify(
      user.hashed_password,
      req.body.inputPassword
    );
    if (verified) {
      // Respond with the user in JSON format (but without the hashed password)
      delete user.hashed_password;
  
      res.json(user);
    } else {
      res.sendStatus(422);
    }

  } catch(err){
    console.log(err);
  }
};

module.exports = { login };
