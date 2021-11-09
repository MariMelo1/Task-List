import "bootstrap/dist/css/bootstrap.min.css";

import { Card, CardBody, Col } from "reactstrap";
/*import logoTask from "./public/logoTask.png";*/

export default function Tarefas() {
  return (
    <>
      <Col className="cardLogin" lg="5" md="7">
        <Card className="bg-secondary shadow border-0 ">
          <CardBody className="px-lg-5 py-lg-5 cardForm">
            <div className="card-top">
              <h6 className="text-tarefa">Tarefa</h6>
              <h2 className="display-4">Meu Perfil</h2>
              <p>Nome</p>
              <p>Email</p>
              <p>Senha</p>
              {/* <img class="imglogo" src={logoTask} alt=""></img> */}
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}
