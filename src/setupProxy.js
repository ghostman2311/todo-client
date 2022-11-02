function proxy(app) {
  app.get("/", (req, res) => res.redirect("/notes"));
}

module.exports = proxy;
