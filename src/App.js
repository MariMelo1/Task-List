import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "components/Header";

import Home from "screens/home";
import AddTarefas from "screens/AddTarefas";
import Tarefas from "screens/Tarefas";
import Perfil from "screens/Perfil";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main id="content" role="main" className="container">
        <Switch>
          <Route path="/AddTarefas" component={AddTarefas} />
          <Route path="/Tarefas" component={Tarefas} />
          <Route path="/Perfil" component={Perfil} />
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
