import React from "react";
import { Route } from "react-router-dom";

import Home from "screens/home";
import AddTarefas from "screens/AddTarefas";
import Tarefas from "screens/Tarefas";
import Perfil from "screens/Perfil";
import Cadastro from "screens/Cadastro";
import Header from "components/Header";


export default function AppRouter(props) {
  return (
    <>
      <Header />
      <Route path="/AddTarefas" component={AddTarefas} />
          <Route path="/Tarefas" component={Tarefas} />
          <Route path="/Perfil" component={Perfil} props={props}/>
          <Route exact path="/" component={Home} />
          <Route path="/Cadastro" component={Cadastro} />
    </>
  );
}
