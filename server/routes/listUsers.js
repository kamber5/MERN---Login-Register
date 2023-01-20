const router = require("express").Router();
const { User } = require("../models/user");

// Route to get all users
router.get('/', async (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(users);
      }
    });
  });

module.exports = router;
