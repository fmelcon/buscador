import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({ setSearch }) => {
  const [term, setTerm] = useState("");
  const [error, setError] = useState(false);

  const buscarImagenes = (e) => {
    e.preventDefault();

    // validar
    if (term.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    // enviar el term de busqueda hacia el componente principal
    setSearch(term);
  };

  return (
    <form onSubmit={buscarImagenes}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca una imagen aqui!"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Buscar"
          />
        </div>
      </div>
      {error ? <Error mensaje="Agrega un parametro de busqueda" /> : null}
    </form>
  );
};

export default Formulario;
