import { Fragment, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";
import { Card, CardBody, Col } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { deleteTask, getOneTask, updateTask } from "services/task";


export default function EditTarefas(props) {
  const id = props.match.params.id
  const [load, setLoad] = useState(false)
  const [edit, setEdit] = useState(false)
  const [task, setTask] = useState({})
  const history = useHistory()
  const validationSchema = Yup.object({
    titulo: Yup.string()
      .min(5, "Seu titulo precisa ter pelo menos 2 letras")
      .required("Campo obrigatório"),
  });

  async function getTask() {
    setLoad(true);
    try {
      const { data } = await getOneTask(id);
      formik.setFieldValue("titulo", data.title);
      formik.setFieldValue("categoria",  data.CategorieId === 1 ? "Pessoal" : "Trabalho");
      formik.setFieldValue("mensagem", data.message);
      formik.setFieldValue("status", data.status);
      setTask(data);
    } catch (err) {
      alert("Não foi possível carregar as suas tarefas.");
    } finally {
      setLoad(false);
    }
  }

  const setFormikValues = () => {

  }

  useEffect(() => {
    getTask()
    setFormikValues()
  }, [])

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
        console.log('values: ', values, id)
        await updateTask({ ...values, id });
        history.push('/tasks')
      } catch (err) {
        alert(err.message);
      }
    }
  });

  async function deleteTaskId() {
    if (window.confirm("Você realmente deseja excluir a tarefa?")) {
      try {
        await deleteTask(id);
        alert("Tarefa deletada com sucesso.");
        history.push('/tasks')
      } catch (err) {
        alert("Não foi possível excluir este registro no momento.");
      }
    }
  }

  return (
    <>
      <Col className="cardLogin" lg="5" md="7">
        <Card className="bg-secondary shadow border-0 ">
          <CardBody className="px-lg-5 py-lg-5 cardForm">
            <Fragment>
              <div className="card-top">
                <h2 className="display-4">{edit ? 'Edição' : 'Tarefa'}</h2>
              </div>
              <form className="mb-5" onSubmit={formik.handleSubmit} noValidate>
                <div className="form-group mb-3">
                  <label style={{ color: "#0a1a3b" }} htmlFor="titulo">
                    Título{" "}
                  </label>
                  <input
                    disabled={!edit}
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
                    onChange={formik.handleChange}
                    disabled={!edit}
                    id="categoria"
                    className="form-control"
                    value={formik.values.categoria}
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
                    onChange={formik.handleChange}
                    disabled={!edit}
                    className="form-control"
                    rows="3"
                    id="mensagem"
                    value={formik.values.mensagem}
                  />
                </div>
                <div className="form-group mb-3">
                  <label style={{ color: 'Black', marginRight: '30px' }} class="form-check-label" for="flexCheckDefault">
                    Status
                  </label>
                  <input  disabled={!edit} class="form-check-input" name={'status'} type="checkbox" value="" id="flexCheckDefault" checked={formik.values.status} onClick={formik.handleChange} />

                </div>
                {edit ?
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    id="button"
                  >
                    Salvar
                  </button>

                </div>
                :   <div className="d-grid gap-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                  id="button"
                  onClick={()=> history.push('/tasks')}
                >
                  Voltar
                </button>

              </div>}
              </form>
              {!edit ?
              <button
                className="btn btn-secondary"
                id="button"
                onClick={() => setEdit(true)}
              >
                Editar
              </button>
             : null}
                {edit ?
                  <button
                    style={{ marginLeft: '20px'}}
                    onClick={() => setEdit(false)}
                    className="btn btn-secondary"
                    id="button"
                  >
                    Cancelar
                  </button>
                 : null}
              <button 
              onClick={()=> deleteTaskId()}
              type="button" 
              class="btn btn-danger" 
              style={{ fontSize: '15px', marginLeft: '20px', marginTop: '10px' }}>
                Excluir
              </button>
            </Fragment>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}
