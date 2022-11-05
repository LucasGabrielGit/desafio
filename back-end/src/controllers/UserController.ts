import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { UserDTO } from "../UseCases/UserDTO";

export class UserController {
  async save(req: Request, res: Response) {
    const userDTO: UserDTO = req.body;

    const service = new UserService();

    const result = await service.create(userDTO);

    if (result instanceof Error) {
      return res.status(400).json({
        message: result.message,
      });
    }

    return res.json(result);
  }

  async get(req: Request, res: Response) {
    const service = new UserService();

    const result = await service.findUser();

    if (!result) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.json(result);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const user: UserDTO = req.body;

    const service = new UserService();

    const result = await service.updateUser(id, user);

    if (result instanceof Error) return res.status(400).json(result.message);

    return res.json(result);
  }

  async findByEmail(req: Request, res: Response) {
    const { email } = req.params;

    const service = new UserService();

    const result = await service.findByEmail(email);

    console.log(req.params);

    if (result instanceof Error) return res.status(404).json(result.message);

    return res.json(result);
  }
}
