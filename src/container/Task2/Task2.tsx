import { Container, TextField, Button, Typography } from '@mui/material'
import Products from 'container/Products/Products'


type Props = {
     totalData :{
    totalCount: number
    totalPrice: number
}
}



const Task2 = ({ totalData }: Props) => {
 
    return (
        <>
            Task2
            <Typography
                variant="h4"
                align="center"
                component="h1"
                color="blueviolet"
                sx={{ padding: '50px 0' }}
            >
                Our shop page
            </Typography>
            <div className="buttonchiki">
                <Button variant="outlined">UAN</Button>
                <Button variant="outlined">EUR</Button>
                <Button variant="outlined">USD</Button>
                <Button variant="outlined">AED</Button>
            </div>
            <Products />
            <div> Total: {totalData.totalPrice}</div>
        </>
    )
}
export default Task2
