
const {User} = require("../models");
const {encryptSHA256} = require('../utils/encrypt')
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = process.env;


exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({
      attributes: ["id", "name", "email"], // estamos omitindo campos desnecessários para o JWT
      where: {
        email,
        password: encryptSHA256(password),
      },
      raw: true,
    });

    if (!!user) {
        const token = jwt.sign(user, TOKEN_SECRET);
        res.json({
          user,
          token,
          success: true,
          error: false,
        });
      } else {
        res.status(401).json({ error: "Usuário e/ou Senha inválido(s)" });
      }
};

exports.register = async (req, res) => {
    const {name, email, password } = req.body;

    try {
        User.create({
            name,
            email,
            password: encryptSHA256(password)
        })
        res.status(200).json({message: "Sucess"})
    } catch (error) {
        res.status(401).json({message: "Erro ao cadastrar usuário"})
    }
  
}



