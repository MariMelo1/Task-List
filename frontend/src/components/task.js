import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";

export default function TaskConmponent({ props }) {
    const { status, message } = props
    if (status) {
        return (
            <Grid item>
                <Link to={'/edit-task'}>
                    <Card className="bg-secondary shadow border-0  ">
                        <CardBody className={`px-lg-5 py-lg-5 card-tarefaP`}>
                            <h6 className="text-tarefaP">{message}</h6>
                        </CardBody>
                    </Card>
                </Link>
            </Grid>
        )
    } else {
        return (
            <Grid item>
                <Link to={'/edit-task'}>
                    <Card className="bg-secondary shadow border-0  ">
                        <CardBody className={`px-lg-5 py-lg-5 card-tarefaT`}>
                            <h6 className="text-tarefaT">{message}</h6>
                        </CardBody>
                    </Card>
                </Link>
            </Grid>
        )
    }
}