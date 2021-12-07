import { Fragment, useEffect, useState} from "react";
import { Field, useFormik } from "formik";
import * as Yup from "yup";

import { Card, CardBody, Col } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { getOneTask, updateTask } from "services/task";


export default function EditTarefas(props) {
  const id = props.match.params.id
  const [load, setLoad] = useState(false)
  const [task, setTask] = useState([])

  const validationSchema = Yup.object({
    titulo: Yup.string()
      .min(5, "Seu titulo precisa ter pelo menos 2 letras")
      .required("Campo obrigatório"),
  });

  async function getTask() {
    setLoad(true);
    try {
      const { data } = await getOneTask(id);
      console.log(data)
      formik.setFieldValue("titulo",data.title);
      formik.setFieldValue("categoria",data.categorie);
      formik.setFieldValue("mensagem",data.message);
      formik.setFieldValue("status",data.status);
      setTask(data);
    } catch (err) {
      alert("Não foi possível carregar as suas tarefas.");
    } finally {
      setLoad(false);
    }
  }

  const setFormikValues = () => {
   
  }

  useEffect(()=>{
    getTask()
    setFormikValues()
  },[])

  const formik = useFormik({
    initialValues: {
      titulo: task.title,
      categoria: task.categorie,
      mensagem: task.message,
      status: task.status
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        console.log('values: ', values , id)
        await updateTask({ ...values, id });
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
                <h2 className="display-4">Editar Tarefa</h2>
              </div>
              <form className="mb-5" onSubmit={formik.handleSubmit} noValidate>
                <div className="form-group mb-3">
                  <label style={{ color: "#0a1a3b" }} htmlFor="titulo">
                    Título{" "}
                  </label>
                  <input
                    type="text"
                    className={`form-control ${!!formik.errors.titulo && "is-invalid"
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
                <div id="checkbox-group">Checked</div>
              <div role="group" aria-labelledby="checkbox-group">
            <label>
              <input type="checkbox" name="status" checked={formik.values.status} onChange={formik.handleChange}/>
            </label>
          </div>
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    id="button"
                  >
                    Salvar
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
