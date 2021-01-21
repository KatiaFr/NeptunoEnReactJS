import './App.css';
import logo from './neptunoLogo.svg';


function App() {
  return (

    <div className="App">
       <header className="App-header">
           <h1>
            Hola <code>NEPTUNO</code> planet
          </h1>
           <img src={logo} className="App-logo" alt="logo" />
    
           
      </header>
     <menu>
        
     <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="./index.html">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="./components/contacto.html">Contactanos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./Información sobre neptuno.html">+Info sobre Neptuno</a>
                </li>  
                <li className="nav-item">
                  <a className="nav-link" href="./otro.html">Adivinanza</a>
                </li>
              </ul>
            </div>  
          </nav>
        </menu>

<nav>
</nav>

<footer>

</footer>

    </div>


  );
}

export default App;
