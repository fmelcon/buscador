import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";

function App() {
  const [search, setSearch] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const consultarAPI = async () => {
      if (search === "") return;

      const imagenesPorPagina = 30;
      const key = "22692440-8c2855f87602f7d309369a751";
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagenesPorPagina}&page=${page}`;

      const response = await fetch(url);
      const result = await response.json();
      setImagenes(result.hits);

      //calcular cantidad de paginas
      const calcularTotalPaginas = Math.ceil(
        result.totalhits / imagenesPorPagina
      );
      setTotalPages(calcularTotalPaginas);

      // Mover la pantalla hacia arriba
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };
    consultarAPI();
  }, [search, page]);

  // Definir pagina anterior
  const paginaAnterior = () => {
    const newPage = page - 1;

    if (newPage === 0) return;

    setPage(newPage);
  };

  const paginaSiguiente = () => {
    const newPage = page + 1;

    if (newPage > totalPages) return;

    setPage(newPage);
  };

  return (
    <div className="container">
      <div className="jumbotron my-5">
        <h2 className="lead text-center pb-3">Buscador de imagenes</h2>
        <Formulario setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes} />

        {page === 1 ? null : (
          <button
            type="button"
            className="btn btn-info mr-1 mb-5"
            onClick={paginaAnterior}
          >
            &laquo; Anterior
          </button>
        )}

        {page === totalPages ? null : (
          <button
            type="button"
            className="btn btn-info mb-5"
            onClick={paginaSiguiente}
          >
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
