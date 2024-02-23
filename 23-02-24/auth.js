/**
 * Middleware che mi permette di controllare se l'utente
 * ha le necessarie autorizzazioni per accedere alla pagina
 */

const auth = (req, res, next) => {
  const username = req.query.username;

  if (username !== "admin") {
    res.status(401).send("Ho detto di cliccare solo se sei admin!");
  }

  next();
};

module.exports = auth;
