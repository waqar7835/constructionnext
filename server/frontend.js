const express = require("express");
const next = require("next");
const axios = require("axios");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get(/\.(jpg|png|svg|gif|css|jpeg|woff|woff2)$/, (req, res) => {
    return handle(req, res);
  });
  server.get("/", (req, res) => {
    return app.render(req, res, "/", {
      ...req.query,
    });
  });
  server.get("/contact", (req, res) => {
    return app.render(req, res, "/contact", {
      ...req.query,
    });
  });
  server.get("/about", (req, res) => {
    return app.render(req, res, "/about", {
      ...req.query,
    });
  });
  server.get("/inventory/search", (req, res) => {
    return app.render(req, res, "/products", {
      ...req.query,
    });
  });
  server.get("/inventory/:title/:id", (req, res) => {
    return app.render(req, res, "/products/detail", {
      title: req.params.title,
      id: req.params.id,
      ...req.query,
    });
  });
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
  });
});
