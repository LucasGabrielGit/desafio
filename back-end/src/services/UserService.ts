import { Usuario } from "../database/entities/Usuario";

import { AppDataSource as dataSource } from "../app-datasource";
import { UserDTO } from "../UseCases/UserDTO";
import { TernaryFunction } from "../Utils/Functions";

export class UserService {
  async create(usuario: UserDTO): Promise<Usuario | Error> {
    const repository = dataSource.getRepository(Usuario);

    /**
     * Verifica se o usuário já está cadastrado no banco de dados
     * Se já estiver cadastrado, o mesmo será apenas atualizado
     */
    if (await repository.findOneBy({ email: usuario.email })) {
      this.updateUser(usuario.id, usuario);
      return new Error("Já existe um usuário cadastrado com esse e-mail");
    }

    const user = repository.create(usuario);

    await repository.save(user);

    return user;
  }

  async findUser(): Promise<Usuario[] | Error> {
    const repository = dataSource.getRepository(Usuario);

    const users = await repository.find();

    if (!users) {
      return new Error("Nenhum usuário encontrado!");
    }

    return users;
  }

  /**
   *
   * @param id
   * @param usuario
   * @returns usuário atualizado
   */
  async updateUser(id: string, usuario: UserDTO): Promise<Usuario | Error> {
    const repository = dataSource.getRepository(Usuario);

    const user = await repository.findOne({
      where: { id: id },
    });

    if (!user) {
      return new Error("Usuário não existe no banco de dados!");
    }

    /**
     * Aqui foi feita uma verificação para saber
     * se os campos estão vindos vazios, caso estejam, é mantido
     * o mesmo valor que ele tinha antes, caso contrário é atualizado
     * para o novo valor recebido no front-end
     */

    user.name = TernaryFunction(usuario.name, user.name);
    user.email = TernaryFunction(usuario.email, user.email);
    //
    user.confirm_email = TernaryFunction(
      usuario.confirm_email,
      user.confirm_email
    );
    //
    user.bairro = TernaryFunction(usuario.bairro, user.bairro);
    user.pais = TernaryFunction(usuario.pais, user.pais);
    user.cep = TernaryFunction(usuario.cep, user.cep);
    //
    user.complemento = TernaryFunction(usuario.complemento, user.complemento);
    //
    user.numero = TernaryFunction(usuario.numero, user.numero);
    user.logradouro = TernaryFunction(usuario.logradouro, user.logradouro);
    user.municipio = TernaryFunction(usuario.municipio, user.municipio);
    //
    user.telefone_fixo = TernaryFunction(
      usuario.telefone_fixo,
      user.telefone_fixo
    );
    //
    user.uf = TernaryFunction(usuario.uf, user.uf);
    user.celular = TernaryFunction(usuario.celular, user.celular);
    user.cpf = TernaryFunction(usuario.cpf, user.cpf);

    await repository.save(user);

    return user;
  }

  /**
   *
   * @param email
   */
  async findByEmail(email: string): Promise<Usuario | Error> {
    const repository = dataSource.getRepository(Usuario);
    const usuario = await repository.findOne({
      where: { email: email },
    });

    if (!usuario) {
      return new Error("Usuário não encontrado.");
    }

    return usuario;
  }
}
