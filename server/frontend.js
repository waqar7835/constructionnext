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
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
  });
});
