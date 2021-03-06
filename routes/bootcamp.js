const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: "Show all bootcamps " + req.params.id });
});

router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: "get bootcamps " + req.params.id });
});
router.post("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: "create new bootcamp " + req.params.id });
});

router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: "update bootcamp " + req.params.id });
});

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: "delete bootcamp " + req.params.id });
});

module.exports = router;
