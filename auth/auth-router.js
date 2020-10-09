const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../user/userModel.js');
const jwt = require('jsonwebtoken');

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10)
  user.password = hash;
  Users.add(user)
    .then((saved) => {
      res.status(201).json(saved);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  // implement login
  let { username, password } = req.body
});

module.exports = router;
