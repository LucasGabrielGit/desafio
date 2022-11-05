import {
  Panel,
  Card,
  InputMask,
  Dropdown,
  InputText,
  Button,
} from "primereact";
import { Toaster, toast } from "react-hot-toast";
import { api } from "./service/api/api";

import "./resources/styles/customStyles/custompanel.css";
import "./resources/styles/customStyles/customcardtitle.css";
import { FormEvent, useState } from "react";

function App() {
  //useStates que serão usados na aplicação

  const [name, setName] = useState("");
  const [pais, setPais] = useState<any>(null);
  const [cpf, setCPF] = useState("");
  const [telefoneFixo, setTelefoneFixo] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [numero, setNumero] = useState("");
  const [uf, setUF] = useState("");
  const [cep, setCEP] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [celular, setCelular] = useState("");

  // eslint-disable-line react-hooks/exhaustive-deps

  const onChangeCountry = (e: { value: any }) => {
    setPais(e.value);
  };

  const onChangeCity = (e: { value: any }) => {
    setMunicipio(e.value);
  };

  function clearInputs() {
    setName("");
    setCPF("");
    setEmail("");
    setConfirmEmail("");
    setBairro("");
    setCEP("");
    setCelular("");
    setComplemento("");
    setLogradouro("");
    setMunicipio("");
    setNumero("");
    setPais("");
    setTelefoneFixo("");
    setUF("");
  }

  async function handleCreateUser() {
    await api.post("/create", {
      name,
      email,
      confirmEmail,
      cep,
      telefoneFixo,
      bairro,
      municipio,
      logradouro,
      celular,
      cpf,
      numero,
      uf,
      complemento,
      pais,
    });
  }

  const notify = () =>
    toast.promise(handleCreateUser(), {
      loading: "Salvando...",
      success: <b>Cadastro concluído</b>,
      error: <b>Ocorreu um erro durante o processo</b>,
    });

  const countries = [
    { name: "África do Sul" },
    { name: "Afeganistão" },
    { name: "Alemanha" },
    { name: "Argentina" },
    { name: "Áustria" },
    { name: "Brasil" },
    { name: "Bulgária" },
    { name: "Argélia" },
    { name: "Bolívia" },
    { name: "Bélgica" },
    { name: "Camarões" },
    { name: "Chile" },
    { name: "Costa Rica" },
    { name: "Croácia" },
    { name: "Dinamarca" },
    { name: "Equador" },
    { name: "Egito" },
    { name: "Espanha" },
    { name: "Grécia" },
  ];

  const municipios = [
    { name: "Á" },
    { name: "B" },
    { name: "C" },
    { name: "D" },
    { name: "E" },
    { name: "F" },
    { name: "G" },
    { name: "H" },
    { name: "I" },
    { name: "J" },
    { name: "K" },
    { name: "L" },
    { name: "M" },
    { name: "N" },
    { name: "O" },
    { name: "P" },
    { name: "Q" },
    { name: "R" },
    { name: "S" },
  ];

  return (
    <>
      <Card
        title="Atualizar meus dados pessoais"
        className="_card m-3 shadow-3"
      >
        <form
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            notify();
          }}
        >
          <Toaster />
          <Panel className="mypanel p-2" header="Dados Pessoais">
            <div className="formgrid grid">
              <div className="field col-12 md:col-2 mr-8 sm:col-6">
                <label htmlFor="cpf" className="font-medium">
                  CPF
                </label>
                <InputMask
                  id="cpf"
                  type="text"
                  value={cpf}
                  required
                  onChange={(e) => {
                    setCPF(e.target.value);
                  }}
                  mask="999.999.999-99"
                  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                  placeholder="___.___.___-__"
                />
              </div>
              <div className="field col-12 md:col-4 md:ml-4 sm:col-6">
                <label htmlFor="name">Como você quer ser chamado?</label>
                <InputText
                  id="name"
                  type="text"
                  value={name}
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                />
              </div>
            </div>
          </Panel>

          <Panel className="mypanel p-2" header="Dados de Endereço/Contado">
            <div className="formgrid grid">
              <div className="field col-12 md:col-2 mr-8 sm:col-6">
                <label htmlFor="country" className="font-medium">
                  País
                </label>
                <Dropdown
                  options={countries}
                  optionLabel="name"
                  optionValue="name"
                  value={pais}
                  onChange={onChangeCountry}
                  placeholder="Selecionar..."
                  filter
                  showClear
                  filterBy="name"
                  className="text-base text-color surface-overlay border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                />
              </div>

              <div className="field col-12 md:col-1 md:mr-6 md:ml-4 sm:col-6">
                <label htmlFor="cep" className="font-medium">
                  CEP
                </label>
                <InputMask
                  mask="99999-999"
                  placeholder="_____-___"
                  id="cep"
                  value={cep}
                  onChange={(e) => {
                    setCEP(e.target.value);
                  }}
                  className="text-base text-color surface-overlay border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                />
              </div>
              <div className="field col-12 md:col-1 md:mr-6 sm:col-6">
                <label htmlFor="uf" className="font-medium">
                  UF
                </label>
                <InputText
                  id="uf"
                  value={uf}
                  onChange={(e) => {
                    setUF(e.target.value);
                  }}
                  className="text-base text-color surface-overlay border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                />
              </div>
              <div className="field col-12 md:col sm:col-6">
                <label htmlFor="municipio" className="font-medium">
                  Município
                </label>
                <Dropdown
                  id="municipio"
                  options={municipios}
                  optionLabel="name"
                  optionValue="name"
                  value={municipio}
                  onChange={onChangeCity}
                  placeholder="Selecionar..."
                  className="text-base text-color surface-overlay border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                />
              </div>
            </div>
            <div className="formgrid grid">
              <div className="field col-12 md:col-4 md:mr-6 sm:col-6">
                <label htmlFor="logradouro" className="block font-medium">
                  Logradouro
                </label>
                <InputText
                  id="logradouro"
                  value={logradouro}
                  onChange={(e) => {
                    setLogradouro(e.target.value);
                  }}
                  aria-describedby="logradouro-small-info"
                  className="text-muted block text-base text-color surface-overlay border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                />
                <small
                  id="logradouro-small-info"
                  className="block font-medium text-500"
                >
                  Informe o nome da rua, avenida ou quadra.
                </small>
              </div>
              <div className="field col-12 md:col-1 mr-6 sm:col-6">
                <label htmlFor="numero" className="font-medium">
                  Nº
                </label>
                <InputText
                  id="numero"
                  value={numero}
                  onChange={(e) => {
                    setNumero(e.target.value);
                  }}
                  className="text-base text-color surface-overlay border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full "
                />
              </div>
              <div className="field col-12 md:col sm:col-6">
                <label
                  htmlFor="bairro"
                  aria-describedby="smallInfoBairro"
                  className="font-medium block"
                >
                  Bairro
                </label>
                <InputText
                  id="bairro"
                  value={bairro}
                  onChange={(e) => {
                    setBairro(e.target.value);
                  }}
                  className="text-base text-color surface-overlay border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                />
                <small
                  className="block font-medium text-500"
                  id="smallInfoBairro"
                >
                  Informe o bairro
                </small>
              </div>
              <div className="field col-12 md:col sm:col-6">
                <label htmlFor="complemento" className="font-medium">
                  Complemento
                </label>
                <InputText
                  id="complemento"
                  value={complemento}
                  onChange={(e) => {
                    setComplemento(e.target.value);
                  }}
                  className="text-base text-color surface-overlay border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                />
              </div>
            </div>

            <div className="formgrid grid">
              <div className="field col-12 md:col-4 md:mr-6 sm:col-6">
                <label htmlFor="telFixo" className="font-medium block">
                  Telefone Fixo
                </label>
                <InputText
                  id="telFixo"
                  value={telefoneFixo}
                  onChange={(e) => {
                    setTelefoneFixo(e.target.value);
                  }}
                  aria-describedby="telFixoInfo"
                  className="text-base text-color surface-overlay border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                />
                <small className="block font-medium text-500" id="telFixoInfo">
                  Informe o número de telefone fixo
                </small>
              </div>
              <div className="field col-12 md:col-3 sm:col">
                <label htmlFor="txtCelular" className="font-medium">
                  Celular
                </label>
                <InputMask
                  mask="(99) 9 9999-9999"
                  placeholder="(__) _ ____-____"
                  id="txtCelular"
                  value={celular}
                  onChange={(e) => {
                    setCelular(e.target.value);
                  }}
                  className="text-base text-color surface-overlay border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                />
              </div>
            </div>
            <div className="formgrid grid">
              <div className="field col-12 md:col-4 md:mr-6 sm:col-6">
                <label htmlFor="txtEmail" className="font-medium">
                  E-mail
                </label>
                <InputText
                  type="email"
                  id="txtEmail"
                  value={email}
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="text-base text-color surface-overlay border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                />
              </div>
              <div className="field col-12 md:col-3 sm:col-6">
                <label htmlFor="txtConfirmarEmail" className="font-medium">
                  Confirmar e-amail
                </label>
                <InputText
                  type="email"
                  id="txtConfirmarEmail"
                  value={confirmEmail}
                  required
                  onChange={(e) => {
                    setConfirmEmail(e.target.value);
                  }}
                  className="text-base text-color surface-overlay border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                />
              </div>
            </div>
            <div className="flex flex-row-reverse flex-wrap">
              <div className="flex align-items-center text-white-900 border-round">
                <Button label="Sair" className="p-button-secondary" />
                <Button
                  label="Limpar"
                  className="p-button-warning mr-4 ml-4"
                  onClick={(e: FormEvent) => {
                    e.preventDefault();
                    clearInputs();
                  }}
                />
                <Button
                  label="Atualizar cadastro"
                  type="submit"
                  className="p-button-success"
                />
              </div>
            </div>
          </Panel>
        </form>
      </Card>
    </>
  );
}

export default App;
