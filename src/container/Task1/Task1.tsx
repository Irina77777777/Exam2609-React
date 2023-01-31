import { Container, Typography } from '@mui/material'
import Counti from 'container/Counti/Counti'
import './Task-1.css'


const Task1 = () => {
   

    return (
        <div>
            <Typography
                variant="h4"
                align="center"
                component="h1"
                color="blueviolet"
                sx={{ padding: '50px 0' }}
            >
                First task :
            </Typography>

            <Container maxWidth="lg" sx={{ padding: '50px 10px' }}>
                <Counti/>
            </Container>
        </div>
    )
}
export default Task1