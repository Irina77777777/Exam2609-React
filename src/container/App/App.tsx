import { Container, TextField, Typography } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { useState } from 'react'
import './App.css'

type Props = {}
const App = (props: Props) => {
    const [count, setCount] = useState<number>(0)
    const [count2, setCount2] = useState<number>(0)
     const [count1, setCount1] = useState<number>(0)
    return (
        <>
            <CssBaseline />
            <Typography
                variant="h3"
                align="center"
                component="h1"
                color="blueviolet"
                sx={{ padding: '50px 0' }}
            >
                First task :
            </Typography>
            <Typography
                variant="h5"
                align="center"
                component="h1"
                color="blueviolet"
                sx={{ padding: '50px 0' }}
            >
                Kovalenko Iryna FE2609
            </Typography>

            <Container maxWidth="lg" sx={{ padding: '50px 10px' }}>
                <div className="buttonchiki">
                    <TextField
                        label="Change Count 1"
                        value={count}
                        variant="outlined"
                        onClick={() => setCount(count + 1)}
                    ></TextField>
                    <TextField
                        label="Change Count 2"
                        value={count2}
                        variant="outlined"
                        onClick={() => setCount2(count2 + 1)}
                    ></TextField>
                    <TextField
                        label="Change Count 3"
                        value={count1}
                        variant="outlined"
                        onClick={() => setCount1(count1 + 1)}
                    ></TextField>
                </div>
            </Container>
        </>
    )
}
export default App
