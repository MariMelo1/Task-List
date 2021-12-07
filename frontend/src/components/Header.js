import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Menu() {
  return (
    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/tasks" className="nav-link">
            Tarefas
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/task/add" className="nav-link">
            Adicionar Tarefas
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Perfil
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Menu />
        </div>
      </nav>
    </header>
  );
}
