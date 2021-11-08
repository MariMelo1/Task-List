import "bootstrap/dist/css/bootstrap.min.css";

import { Fragment } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

//import logoTask from "../public/logoTask.png";

export default function Cadastro() {
  const validationSchema = Yup.object({
    titulo: Yup.string()
      .min(5, "Seu titulo precisa ter pelo menos 2 letras")
      .required("Campo obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // envio do form...
      console.log(`envia estes dados para o servidor`, values);
    },
  });

  return (
    <>
      <Col className="cardLogin" lg="5" md="7">
        <Card className="bg-secondary shadow border-0 ">
          <CardBody className="px-lg-5 py-lg-5 cardForm">
            {/* <img src={logoTask} alt="logo" width="50" height="50" /> */}
            <Fragment>
              <form onSubmit={formik.handleSubmit}>
                <div className="card-top">
                  <h2 className="display-4">Cadastro</h2>
                  <p style={{ color: "#0a1a3b" }}>Faça seu cadastro abaixo:</p>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="nome" style={{ color: "#0a1a3b" }}>
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      !!formik.errors.nome && "is-invalid"
                    }`} //usando a aspa de crase
                    id="nome"
                    value={formik.values.nome}
                    onChange={formik.handleChange}
                  />
                  {!!formik.errors.nome && (
                    <div className="error">{formik.errors.nome}</div>
                  )}
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email" style={{ color: "#0a1a3b" }}>
                    E-mail
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      !!formik.errors.email && "is-invalid"
                    }`}
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {!!formik.errors.email && (
                    <div className="error">{formik.errors.email}</div>
                  )}
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Password" style={{ color: "#0a1a3b" }}>
                    Senha
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                </div>
                <Link to="/Login">
                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary "
                      id="button">
                      Cadastrar
                    </button>
                  </div>
                </Link>
                
                <Link to="/Login">
                  <button
                    type="button"
                    className="btn btn-link "
                    id="btn-Irlogin"
                  >
                    Já possuo cadastro
                  </button>
                </Link>
              </form>
            </Fragment>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}
