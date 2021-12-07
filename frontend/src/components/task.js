import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
export default function TaskConmponent({ props }) {
    const { status, message, id } = props

    if (status) {
        return (
            <Grid item>
                <Card className="bg-secondary shadow border-0  ">
                    <CardBody className={`px-lg-5 py-lg-5 card-tarefaP`}>
                        <Link to={`/edit-task/${id}`}>
                            <h6 className="text-tarefaP">{message}</h6>
                        </Link>
                    </CardBody>
                </Card>
            </Grid>
        )
    } else {
        return (
            <Grid item>
                <Card className="bg-secondary shadow border-0  ">
                    <CardBody className={`px-lg-5 py-lg-5 card-tarefaT`}>
                        <Link to={`/edit-task/${id}`}>
                            <h6 className="text-tarefaT">{message}</h6>
                        </Link>
                    </CardBody>
                </Card>
            </Grid>
        )
    }
}