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
            isNullable: true,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
            isNullable: true,
          },
          {
            name: "confirm_email",
            type: "varchar",
            isUnique: true,
            isNullable: true,
          },
          {
            name: "cpf",
            type: "varchar",
            isUnique: true,
            isNullable: true,
          },
          {
            name: "pais",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "cep",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "uf",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "municipio",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "logradouro",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "bairro",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "complemento",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "numero",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "telefone_fixo",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "celular",
            type: "varchar",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("usuario");
  }
}
