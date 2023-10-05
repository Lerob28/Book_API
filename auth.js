require('dotenv').config()
const jwt = require('jsonwebtoken');
const users = require('./users');

const authUser = (req, res) => {
    const { username, password } = req.body;

    const user = users.find((element) => element.username == username);

    if (user && (password == user.password)) {

    // Create token
    const token = jwt.sign(
        { 
            user_id: user._id, 
            username: username 
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "2min",
        }
    );

    // Authenticate user
    return res.status(200).json({
        user: user,
        access_token: token,
    });

    }

    return res.status(400).send("Invalid Credentials");

};


const authenticateJWT = (req, res, next) => {
    try {
      const access_token= req.headers.authorization.split(' ')[1];
      jwt.verify(access_token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
          return res.status(403).json(err);
        }
        req.user = user;
        next();
      });
    } catch {
       res.status(401).send("Invalid request!");
    }
};
  
module.exports = { authUser, authenticateJWT };