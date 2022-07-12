import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {

  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
      {/*Cabecera*/}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>

        <h1>Mis Pelis</h1>
      </header>

      {/*Barra de Navegacion*/}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Películas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      {/*Contenido principal*/}

      <section id = "content" className="content">
        {/*Aqui va el listado de las peliculas*/} 
        <Listado listadoState={listadoState} setListadoState={setListadoState}/>       
      </section>


      {/*Barra lateral*/}
      <aside className="lateral">
       <Buscador listadoState={listadoState} setListadoState={setListadoState}/>

        <Crear setListadoState={setListadoState}/>
      </aside>

      <footer className="footer">
        &copy; Master en Javascript ES12 y TypeScript - <a href="https://www.google.com/">Google</a>
      </footer>
    </div>
  );
}

export default App;
