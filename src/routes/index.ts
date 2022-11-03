import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ message: "oi, maluco" });
});

export default routes;
