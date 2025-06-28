import api from "./api";

interface LoginData {
  email: string;
  senha: string;
}

interface CadastroData {
  nome: string;
  email: string;
  senha: string;
}

export const login = async (dados: LoginData) => {
  const response = await api.post("/usuarios/login", dados);
  return response.data;
};

export const cadastrar = async (dados: CadastroData) => {
  const response = await api.post("/usuarios", dados);
  return response.data;
};
