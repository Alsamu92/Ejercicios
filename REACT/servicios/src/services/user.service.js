import { APIUser } from "./service.config";

//! ------------------------REGISTER------------------------------

export const registerUser = async (formData) => {
  //**Esta es como la llamada en insomnia */
  return APIUser.post(`/redirect/`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//**Este service recibe el body del formulario y completa la llamada a la api cuando se hace el setRes en la funcion formsubmit */