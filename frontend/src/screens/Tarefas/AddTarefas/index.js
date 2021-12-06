import { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Card, CardBody, Col } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { createTask } from "services/task";
import { useUsuario } from "context/UserContext";

export default function AddTarefas() {
  const user = useUsuario() 
  const validationSchema = Yup.object({
    titulo: Yup.string()
      .min(5, "Seu titulo precisa ter pelo menos 2 letras")
      .required("Campo obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      titulo: "",
      categoria: "",
      mensagem: "",
    },
    validationSchema,
    onSubmit: async (values) => {
        try {
          console.log('values: ', values)
          await createTask({...values, user});
          window.location.reload()
        } catch (err) {
          alert(err.message);
        }
      }
  });

  return (
    <>
      <Col className="cardLogin" lg="5" md="7">
        <Card className="bg-secondary shadow border-0 ">
          <CardBody className="px-lg-5 py-lg-5 cardForm">
            <Fragment>
              <div className="card-top">
                <h2 className="display-4">Tarefas</h2>
                <p>Adicione suas taferas abaixo: </p>
              </div>
              <form className="mb-5" onSubmit={formik.handleSubmit} noValidate>
                <div className="form-group mb-3">
                  <label style={{ color: "#0a1a3b" }} htmlFor="titulo">
                    Título{" "}
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      !!formik.errors.titulo && "is-invalid"
                    }`}
                    id="titulo"
                    value={formik.values.titulo}
                    onChange={formik.handleChange}
                  />
                  {!!formik.errors.titulo && (
                    <div className="error">{formik.errors.titulo}</div>
                  )}
                </div>
                <div className="form-group mb-3">
                  <label style={{ color: "#0a1a3b" }} htmlFor="categoria">
                    Categoria
                  </label>
                  <select
                    id="categoria"
                    className="form-control"
                    value={formik.values.categoria}
                    onChange={formik.handleChange}
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Trabalho">Trabalho</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label style={{ color: "#0a1a3b" }} htmlFor="mensagem">
                    Mensagem
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    id="mensagem"
                    value={formik.values.mensagem}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    id="button"
                  >
                    Cadastrar tarefa
                  </button>
                </div>
              </form>
              {/* <pre>{JSON.stringify(formik.values, null, 2)}</pre> */}
            </Fragment>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}
