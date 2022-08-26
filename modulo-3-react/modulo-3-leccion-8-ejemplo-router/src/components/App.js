// Fichero src/components/App.js

import { Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h2>Este título aparece siempre</h2>

      <Routes>
        <Route path="/contact" />
        {/*añadir element={<ContactPage />} cuando exista*/}
        <Route path="/products" />
        {/*añadir element={<ProductsPage />} cuando exista*/}
      </Routes>

      {/*TRADUCCIÓN A JS:
      if (route empieza por "/contact") {
          renderizarEnLaPagina(<h2>Página del formulario de contacto</h2>);
          } else if (route empieza por "/products") {
           renderizarEnLaPagina(<h2>Página de productos</h2>);
        } */}

      <nav>
        <ul>
          <li>
            <Link to="/">Ir al inicio</Link>
          </li>
          <li>
            <Link
              to="/contacto"
              className="link"
              id="contact-link"
              target="_blank"
            >
              Ir a contacto
            </Link>
          </li>
          <li>
            <Link to="/contacto/formulario">Ir al formulario de contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
