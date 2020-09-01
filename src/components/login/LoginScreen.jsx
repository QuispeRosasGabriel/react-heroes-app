import React from "react";
/**
 *
 * @param {History Annotation} param0 History es nativo de los props y se usa para ver el historial del componente
 */
const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    history.replace("/");
  };

  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Ingresar
      </button>
    </div>
  );
};

export default LoginScreen;
