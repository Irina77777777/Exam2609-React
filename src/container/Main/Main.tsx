import { Container } from "@mui/material"
import Task1 from "container/Task1/Task1"
import Task2 from "container/Task2/Task2"

type Props = {
}

const Main = ( props: Props) => {
    return (
        <Container maxWidth="lg" component="main">
            <Task1 />
            <Task2 />*{' '}
        </Container>
    )
}
export default Main