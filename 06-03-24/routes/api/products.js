const express = require("express");
const {
  data,
  getAllProducts,
  getProductsByDepartment,
  getProductById,
  getProductsByName,
} = require("../../controllers/productsController");
const router = express.Router();

router.get("/", (req, res) => {
  const response = {
    status: "OK",
    products: getAllProducts(),
    elements: getAllProducts().length,
  };

  res.status(200).json(response);
});

router.get("/search", (req, res) => {
  const { name, department } = req.query;

  if (name === undefined && department === undefined) res.redirect("./");

  let filteredProducts = data.products;

  if (name !== undefined) filteredProducts = getProductsByName(name);
  if (department !== undefined)
    filteredProducts = getProductsByDepartment(department, filteredProducts);

  if (filteredProducts.length === 0) {
    const response = {
      status: "ERROR",
      message:
        "Non è stato trovato alcun prodotto corrispondente ai filtri selezionati",
    };
    return res.status(404).json(response);
  }

  const response = {
    status: "OK",
    products: filteredProducts,
    elements: filteredProducts.length,
  };

  res.status(200).json(response);
});

router.get("/search/:productID([0-9]{0,9})", (req, res) => {
  const productID = Number(req.params["productID"]);
  const product = getProductById(productID);

  if (product === undefined) {
    const response = {
      status: "ERROR",
      message: `Il prodotto con id (${productID}) non è stato trovato!`,
    };
    return res.status(404).json(response);
  }

  const response = {
    status: "OK",
    product: product,
  };

  res.status(200).json(response);
});

module.exports = router;
