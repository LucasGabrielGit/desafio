import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("usuario")
export class Usuario {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name: string;
  @Column()
  pais: string;
  @Column()
  cep: string;
  @Column()
  uf: string;
  @Column()
  municipio: string;
  @Column()
  logradouro: string;
  @Column()
  bairro: string;
  @Column()
  numero: string;
  @Column()
  complemento: string;
  @Column()
  telefone_fixo: string;
  @Column()
  celular: string;
  @Column()
  email: string;
  @Column({ name: "confirm_email" })
  confirm_email: string;
  @Column()
  cpf: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
