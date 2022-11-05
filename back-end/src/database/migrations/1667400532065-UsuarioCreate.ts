import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UsuarioCreate1667400532065 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "usuario",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
            isUnique: true,
            generationStrategy: "uuid",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "confirm_email",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "cpf",
            type: "varchar",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "pais",
            type: "varchar",
          },
          {
            name: "cep",
            type: "varchar",
          },
          {
            name: "uf",
            type: "varchar",
          },
          {
            name: "municipio",
            type: "varchar",
          },
          {
            name: "logradouro",
            type: "varchar",
          },
          {
            name: "bairro",
            type: "varchar",
          },
          {
            name: "complemento",
            type: "varchar",
          },
          {
            name: "numero",
            type: "varchar",
          },
          {
            name: "telefone_fixo",
            type: "varchar",
          },
          {
            name: "celular",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("usuario");
  }
}
