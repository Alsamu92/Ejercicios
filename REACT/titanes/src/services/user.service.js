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

//! ------------------------------- CHECK CODE ---------------------------------

export const checkCodeConfirmationUser = async (formData) => {
  return APIUser.post("/check", formData)
    .then((res) => res)
    .catch((error) => error);
};

//!  ------------------------------- RESEND CODE -------------------------------

export const resendCodeConfirmationUser = async (formData) => {
  return APIUser.post("/users/resend", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------------------- AUTOLOGIN ----------------------------------

export const autologinUser = async (formData) => {
  return APIUser.post("/autologin", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------------------- LOGIN -------------------------------------

export const loginUserService = async (formData) => {
  return APIUser.post("/login", formData)
    .then((res) => res)
    .catch((error) => error);
};