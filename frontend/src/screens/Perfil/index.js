import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "context/AuthContext";
import { useUsuario } from "context/UserContext";

import { Card, CardBody, Col } from "reactstrap";
/*import logoTask from "./public/logoTask.png";*/

export default function Tarefas() {
 const user = useUsuario() 
 const auth = useAuth()
 console.log('user:', user)
  return (
    <>
      <Col className="cardLogin" lg="5" md="7">
        <Card className="bg-secondary shadow border-0 ">
          <CardBody className="px-lg-5 py-lg-5 cardForm">
            <div className="card-top">
              <h2 className="display-4">Perfil</h2>
              <br/>
              <div style={{textAlign:'left'}}>
                  <p>{`Nome: ${user.usuario.name}`}</p>
                  <p>{`E-mail: ${user.usuario.email}`}</p>
              </div>
              {/* <img class="imglogo" src={logoTask} alt=""></img> */}
            </div>
            <div className="d-grid gap-2">
                  <button
                    className="btn btn-secondary"
                    id="button"
                    onClick={()=> auth.logout()}
                  >
                    Logout
                  </button>
                </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}
