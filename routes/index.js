const express = require("express");
const router = express.Router();
router.get("/send-message", (req, res) => {
  res.send({ message: "I am alive" }).status(200);
});
module.exports = router;