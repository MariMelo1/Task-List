import { Grid } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskConmponent from "components/task";
import { useUsuario } from "context/UserContext";
import { GridList } from "material-ui";
import { useEffect, useState } from "react";
import { getTasks, getTasksByDate } from "services/task";

export default function Home() {
  const { usuario } = useUsuario()
  const [load, setLoad] = useState(false)
  const [tasks, setTasks] = useState([])
  
  async function listTasks() {
    setLoad(true);
    try {
      const { data } = await getTasksByDate(usuario.id);
      console.log('data: ', data)
      setTasks(data);
    } catch (err) {
      alert("Não foi possível carregar as suas tarefas.");
    } finally {
      setLoad(false);
    }
  }

  useEffect(() => {
    listTasks()
  }, [])

  return (
    <>
     <Grid container spacing={2}>
     <Grid item xs={12}>
        <Grid container justifyContent="left" spacing={2}>
          
        {tasks.length ? tasks.map(task => {
          return (
            <TaskConmponent props={task}/>
        )}) : <p>Nenhuma tarefa a ser exibida</p>}
         </Grid>
        </Grid>
     </Grid>
    </>
  );
}

