const express = require("express");
const { mock } = require("./mock");
const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/homepage.html");
});

/**
 * Stampo il json contenente tutti i prodotti
 */

app.get("/products", (req, res) => {
  const response = {
    status: "OK",
    total: mock.length,
    data: mock,
  };

  res.json(response);
});

/**
 * Stampo il json con i parametri essenziali
 */

app.get("/products/essentialData", (req, res) => {
  const products = mock.map((product) => {
    return {
      id: product.id,
      title: product.title,
      brand: product.brand,
      price: product.price,
    };
  });

  const response = {
    status: "OK",
    total: products.length,
    data: products,
  };

  res.status(200).json(response);
});

/**
 * Stampo il json del prodotto con l'id scelto
 * (Solo se l'id esiste)
 */

app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  const product = mock.find((product) => product.id === Number(id));

  if (product) {
    const response = {
      status: "OK",
      data: product,
    };
    res.status(200).json(response);
  } else {
    const response = {
      status: "ERROR",
      message: "L'id non esiste",
    };
    res.status(404).json(response);
  }
});

/**
 * Stampo il json che potrebbe avere un limite di risultati
 * E i prodotti che contengono una deterimanata parola
 */

app.get("/products/filter/query", (req, res) => {
  const { search, limit } = req.query;
  let filteredProducts = [...mock];

  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (limit) {
    if (limit > mock.length) {
      const response = {
        status: "ERROR!",
        message:
          "Il limite inserito è superiore al numero di elementi presenti!",
      };
      res.status(404).json(response);
    }
    filteredProducts = filteredProducts.slice(0, limit);
  }

  const response = {
    status: "OK",
    total: filteredProducts.length,
    data: filteredProducts,
  };
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server in ascolto alla porta ${PORT}`);
});
