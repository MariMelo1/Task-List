import "bootstrap/dist/css/bootstrap.min.css";

import { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Card,
  CardBody,
  Col,
} from "reactstrap";

import { useAuth } from "context/AuthContext";
import { useHistory } from "react-router";
import { CircularProgress } from "material-ui";
//import logoTask from "../public/logoTask.png";

export default function Login() {
  const { login, isLoginLoading } = useAuth();
  let history = useHistory();
  
  const validationSchema = Yup.object({
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: Yup.string().required("Campo obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log('submit')
      try {
        await login(values.email, values.password);
        history.replace("/");
      } catch (err) {
        alert(err.message);
      }
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
                  <h2 className="display-4">Login</h2>
                  <p style={{ color: "#0a1a3b" }}>Faça seu login abaixo:</p>
                </div>
                {isLoginLoading ? <CircularProgress /> :
                <>
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
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary "
                    id="button"
                  >
                    Login
                  </button>
                </div>
                </>
                }
              </form>
            </Fragment>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}
