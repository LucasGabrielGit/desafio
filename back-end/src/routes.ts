import { Router } from "express";
import { UserController } from "./controllers/UserController";

const routes = Router();
const userController = new UserController();

routes.post("/create", userController.save);
routes.get("/users", userController.get);
routes.get("/user/:email", userController.findByEmail);
routes.put("/user/:id", userController.update);

export { routes };
