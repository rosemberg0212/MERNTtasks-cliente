import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registrarUsuario = async (datos) => {
    try {
      const res = await fetch(
        "https://mascotasapi.herokuapp.com/api/usuarios",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(datos)
        }
      );
      const data = await res.json();
      console.log(data);

      dispatch({
        type: REGISTRO_EXITOSO
      });
    } catch (error) {
      console.log(error);

      dispatch({
        type: REGISTRO_ERROR
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensajeS,
        registrarUsuario
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
