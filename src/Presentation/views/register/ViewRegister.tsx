import { useState } from "react";
import { ApiDelivery } from "../../../Data/sources/remote/api/ApiDelivery";

const RegisterViewModel = () => {
  const [values, setValues] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    hash: "",
    idTipo: 1,
    idStatus: "",
  });

  const onChange = (property: string, value: any) =>
    setValues({ ...values, [property]: value });

  // const register = () => {
  //   console.log(JSON.stringify(values))
  // }
  const register = async () => {
    try {
      const response = await ApiDelivery.post("/user/create", values);
      console.log("Resposta: " + JSON.stringify(response.data));
    } catch (error) {
      console.log("ERRO: " + error);
    }
  };
  return {
    ...values,
    onChange,
    register,
  };
};

export default RegisterViewModel;
