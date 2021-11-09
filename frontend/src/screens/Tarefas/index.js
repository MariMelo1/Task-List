import "bootstrap/dist/css/bootstrap.min.css";

import { Card, CardBody, Col, Row } from "reactstrap";

export default function Tarefas() {
  return (
    <>
      <Row>
        <Col lg="3" md="6">
          <Card className="bg-secondary shadow border-0  ">
            <CardBody className="px-lg-5 py-lg-5 card-tarefaT ">
              <h6 className="text-tarefaT">Tarefa</h6>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" md="6">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5 card-tarefaT ">
              <h6 className="text-tarefaT">Tarefa</h6>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" md="6">
          <Card className="bg-secondary shadow border-0 ">
            <CardBody className="px-lg-5 py-lg-5 card-tarefaP">
              <h6 className="text-tarefaP">Tarefa</h6>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" md="6">
          <Card className="bg-secondary shadow border-0  ">
            <CardBody className="px-lg-5 py-lg-5 card-tarefaP ">
              <h6 className="text-tarefaP">Tarefa</h6>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
