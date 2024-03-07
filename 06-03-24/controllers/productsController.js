const products = require("../models/products.json");

const data = {
  products: products,
  setProducts: (products) => {
    this.products = products;
  },
};

const getAllProducts = () => {
  return data.products;
};

const getProductsByDepartment = (department, products = data.products) => {
  return products.filter(
    (product) => product.tipo.toLowerCase() === department.toLowerCase()
  );
};

const getProductById = (productID) => {
  return data.products.find((product) => product.id === productID);
};

const getProductsByName = (productName, products = data.products) => {
  return products.filter((product) =>
    product.nome.toLowerCase().includes(productName.toLowerCase())
  );
};

module.exports = {
  data,
  getAllProducts,
  getProductsByDepartment,
  getProductById,
  getProductsByName,
};
