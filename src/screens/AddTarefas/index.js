import { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function AddTarefas() {
  const validationSchema = Yup.object({
    titulo: Yup.string().min(5, "Seu titulo precisa ter pelo menos 2 letras").required("Campo obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      titulo: "",
      categoria: "",
      mensagem: "",
    },
    validationSchema,
    onSubmit: values => {
      // envio do form...
      console.log(`envia estes dados para o servidor`, values);
    },
  });

  return (
    <Fragment>
      <h2 className="display-3">Tarefas</h2>
      <form className="mb-5" onSubmit={formik.handleSubmit} noValidate>
        <p>Adicione suas taferas abaixo: </p>
        <div className="form-group mb-3">
          <label htmlFor="titulo">Título </label>
          <input
            type="text"
            className={`form-control ${!!formik.errors.titulo && "is-invalid"}`}
            id="titulo"
            value={formik.values.titulo}
            onChange={formik.handleChange}
          />
          {!!formik.errors.titulo && <div className="error">{formik.errors.titulo}</div>}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria" className="form-control" value={formik.values.categoria} onChange={formik.handleChange}>
            <option value="">Selecione uma opção</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Trabalho">Trabalho</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            className="form-control"
            rows="3"
            id="mensagem"
            value={formik.values.mensagem}
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Cadastrar tarefa
        </button>
      </form>
      <pre>{JSON.stringify(formik.values, null, 2)}</pre>
    </Fragment>
  );
}
