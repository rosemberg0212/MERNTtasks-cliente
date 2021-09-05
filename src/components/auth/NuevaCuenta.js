import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alartas/alertaContext";
import AuthContext from "../../context/auth/authContext";

const NuevaCuenta = () => {
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { registrarUsuario } = authContext;

  //state para inicio de sesión
  const [usuario, guardarUsuario] = useState({
    nombre: "",
    correo: "",
    password: "",
    confirmar: ""
  });

  const { nombre, correo, password, confirmar } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      correo.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    if (password.length < 6) {
      mostrarAlerta(
        "La contraseña debe ser de mas de 6 caracteres",
        "alerta-error"
      );
      return;
    }

    if (password !== confirmar) {
      mostrarAlerta("Las contraseñas debem ser iguales", "alerta-error");
      return;
    }

    registrarUsuario({
      nombre,
      correo,
      password
    });
  };
  return (
    <div className="form-usuario">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Obtener Cuenta</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Tu nombre"
              value={nombre}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="correo"
              id="email"
              placeholder="Tu email"
              value={correo}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Tu password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password</label>
            <input
              type="password"
              name="confirmar"
              id="confirmar"
              placeholder="Repite tu password"
              value={confirmar}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrar"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
