import "./Register.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../../services/user.service";
import { useErrorRegister } from "../../hooks";

export const Register = () => {
  //! 1) Creamos los estados
  /* 1) los estados

        -- 1) [res, setRes] el estado donde se setea la respuesta
        -- 2) [send, setSend] el estado que gestionamos que esta respuesta esta cargando para deshabilitar los botones
        -- 3) [ok, setOk] el estado de navegacion o de ok o no ok de la funcionalidad de la pagina
    */

  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [ok, setOk] = useState(false);

  //! 2 ) -------> llamamos a los hooks

  const { handleSubmit, register } = useForm();
  // el handleSubmit sirve para darle que funcion va a gestionar los datos que vienen del formulario
  /// estos datos son registrados en un objeto gracias a la funcion register, que lo que registra e los valores de los input
  // cuando el register hace el formData lo recibe la funcion que el handleSubmit a decicido que gestione los datos del formulario

  //! 3) --------> La funcion que gestiona los dsatos del formulario el HANDLE
  const formSubmit = async (formData) => {
    // esta funcion va a llamar al servicio

    const customFormData = {
      ...formData,
      gender: "hombre",
    };

    // vamos a hacer la llamada al servicio

    setSend(true);
    setRes(await registerUser(customFormData));
    setSend(false);
  };

  //! 4) ---------> los useEffect que gestionan la respuesta y llama al customHook que gestiona errores
  useEffect(() => {
    // aqui voy a llamar a un customHook para gestionar los posibles errores de la respuesta
 
    useErrorRegister(res, setOk, setRes);
  }, [res]);

  //! 5) ---------> gestion de los estados de navegacion o estados o ok

  if (ok) {
    // cuando es ok true vamos a llevar al usuario a la pagina de check codee confirmation
    console.log("estas registrado 👌");
  }

  return (
    <>
      <div className="form-wrap">
        <h1>Sign Up</h1>
        <p>It’s free and only takes a minute.</p>
        //**El manejador hace que se lance registerUser al enviar. */
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("name", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              username
            </label>
          </div>
          <div className="password_container form-group">
            <input
              className="input_user"
              type="password"
              id="password"
              name="password"
              autoComplete="false"
              {...register("password", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              password
            </label>
          </div>
          <div className="email_container form-group">
            <input
              className="input_user"
              type="email"
              id="email"
              name="email"
              autoComplete="false"
              {...register("email", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              email
            </label>
          </div>

          <div className="btn_container">
        
            <button
              className="btn"
              type="submit"
              //**El disabled siempre esta igual que send 
              //**como cuando se envia se setea a true se deshabilitan cuando se esta enviando*/
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              {send ? "Cargando ...." : "Register"}
            </button>
          </div>
          <p className="bottom-text">
            <small>
              By clicking the Sign Up button, you agree to our{" "}
              <a href="#">Terms & Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </small>
          </p>
        </form>
      </div>
      <footer>
        <p>
          Already have an account? <a href="#">Login Here</a>
        </p>
      </footer>
    </>
  );
};
