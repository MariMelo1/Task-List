import React from "react";
import { Route } from "react-router-dom";

import Home from "screens/home";
import AddTarefas from "screens/Tarefas/AddTarefas";
import Tarefas from "screens/Tarefas";
import Perfil from "screens/Perfil";
import Cadastro from "screens/Cadastro";
import Header from "components/Header";
import ViewTarefas from "screens/Tarefas/ViewTarefas";


export default function AppRouter(props) {
  return (
    <>
      <Header />
          <Route path="/task/add" component={AddTarefas} />
          <Route path="/task/view/:id" component={ViewTarefas} />
          <Route path="/tasks" component={Tarefas} />
          <Route path="/profile" component={Perfil} props={props}/>
          <Route exact path="/" component={Home} />
    </>
  );
}
