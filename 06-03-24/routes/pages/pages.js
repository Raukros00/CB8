const express = require("express");
const {
  getAllProducts,
  getProductsByDepartment,
} = require("../../controllers/productsController");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).render("products", {
    products: getAllProducts(),
  });
});

router.get("/rotteJson", (req, res) => {
  res.status(200).render("rotte");
});

router.get("/:department", (req, res) => {
  res.status(200).render("products", {
    products: getProductsByDepartment(req.params.department),
  });
});

module.exports = router;
