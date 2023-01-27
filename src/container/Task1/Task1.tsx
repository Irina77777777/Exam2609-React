import { Container, Typography } from '@mui/material'
import { useState } from 'react'
import './Task-1.css'

type ButtonsInRow = {
    [id: number]: number 
}

const Task1 = () => {
    const [buttonsInRow, setButtonsInRow] = useState<ButtonsInRow>({
         1: 0,
         2: 0,
        3: 0,
         15:5
    })
    
    const addNum = (id: number, count: number) => {
        setButtonsInRow((prevState: ButtonsInRow) => ({
            ...prevState,
            [id]: prevState[id] + count,
        }))
    }

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
                <div className="buttonchiki">
                    {Object.keys(buttonsInRow).map((buttonId) => (
                        <div className='butt'
                            key={buttonId}
                            onClick={() => addNum(parseInt(buttonId), 1)}
                        >
                            Change count:
                            {buttonId}: {buttonsInRow[parseInt(buttonId)]}
                        
                        </div>
                       
                    ))}
                </div>{' '}
            </Container>
        </div>
    )
}
export default Task1