import express from "express";
import connectToMongoDB from "./database";
import routes from "./routes";

const app = express();

app.use(routes);
app.use(express.json());

connectToMongoDB();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Porta ${PORT} iniciada`);
});
