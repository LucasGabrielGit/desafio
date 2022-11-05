import express, { json } from "express";
import "reflect-metadata";
import { routes } from "./routes";
import cors from "cors";

const app = express();

const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
app.use(json());
app.use(routes);

app.listen(3333, () => {
  console.log("Server listening on port 3000");
  console.log("Press Ctrl+C to shut down");
});
