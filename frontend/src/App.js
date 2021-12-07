import "./App.css";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { useUsuario } from "context/UserContext";

import AuthRouter from "routes/AuthRouter";
import AppRouter from "routes/AppRouter";
import Cadastro from "screens/Cadastro";


function App() {
  const { isLogged } = useUsuario();
  console.log('isLo: ', isLogged)
  return (
    <BrowserRouter>
      <main id="content" role="main" className="container">
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/create-account" component={Cadastro} />
          <Route
            path="/"
            render={props =>
              isLogged ? (
                <AppRouter {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/auth/login",
                    state: { from: props.location },
                  }}
                />
              )
            }
          />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
