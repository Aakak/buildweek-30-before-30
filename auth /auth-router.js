const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./auth-model');

const secrets = require('../config/secrets');

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  if (user.username && user.password) {
    const hash = bcrypt.hashSync(user.password, 16)
    user.password = hash;
    Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      console.log(error)
      res.status(500).json(error);
    })
  } else {
    res.status(400).json({"message": "Missing input"})
  }
  
});

router.post('/login', (req, res) => {
  // implement login
  const {username, password} = req.body;
  Users.findBy({ username })
  .first()
  .then(user => {
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: 'Invalid Credentials' })
    }
  })
  .catch(error => {
    console.log(error)
    res.status(500).json(error)
  });
});


function generateToken(user) {
  const payload = {
    username: user.username,
  };
  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
