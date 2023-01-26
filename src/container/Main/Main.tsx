import { Container } from "@mui/material"
import Task1 from "container/Task1/Task1"
import Task2 from "container/Task2/Task2"
import { Routes, Route } from 'react-router-dom'

type Props = {
}

const Main = ( props: Props) => {
    return (
        <Container maxWidth="lg" component="main">
            {/* <Task1 />
            <Task2 />*{' '} */}
            <Routes>
                <Route path="/" element={<Task1 />} />
                <Route path="/TASK-2" element={<Task2 />} />
            </Routes>
        </Container>
    )
}
export default Main