import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
export default function TaskConmponent({ props }) {
    const { status, title, id } = props

    if (status) {
        return (
            <Grid item>
                <Card className="bg-secondary shadow border-0  ">
                    <CardBody className={`px-lg-5 py-lg-5 card-tarefaP`}>
                        <Link to={`/task/view/${id}`}>
                            <h6 style={{fontWeight:'bold'}} className="text-tarefaP">{`Titulo:`}</h6>
                            <h6 className="text-tarefaP">{title}</h6>
                        </Link>
                        <div >
                             <h6 style={{fontWeight:'bold'}} className="text-tarefaP">{`Status:`}</h6>
                             <h6 className="text-tarefaP">Concluída</h6>
                        </div>
                    </CardBody>
                </Card>
            </Grid>
        )
    } else {
        return (
            <Grid item>
                <Card className="bg-secondary shadow border-0  ">
                    <CardBody className={`px-lg-5 py-lg-5 card-tarefaT`}>
                        <Link to={`/task/view/${id}`}>
                             <h6 style={{fontWeight:'bold'}} className="text-tarefaT">{`Titulo:`}</h6>
                            <h6 className="text-tarefaT">{title}</h6>
                        </Link>
                        <div>
                             <h6 style={{fontWeight:'bold'}} className="text-tarefaT">{`Status:`}</h6>
                             <h6 className="text-tarefaT">Não Concluída</h6>                        </div>
                    </CardBody>
                </Card>
            </Grid>
        )
    }
}