
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import './App.css'
import Main from 'container/Main/Main'
import { useState } from 'react'
import { Button, } from '@mui/material'


type Props = {}

type TotalData = {
    totalCount: number
    totalPrice: number
}
const App = (props: Props) => {

    const [totalData, setTotalData] = useState < TotalData > ({
        totalCount: 5,
        totalPrice: 100,
    }
    )
    
const addPriceToTotal = (count: number, price: number) => {
    setTotalData({totalCount: count, totalPrice: count*price})
}

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Main totalData={totalData} />
            <Button onClick={() => addPriceToTotal(5, 500)}> Buy1</Button>
        </StyledEngineProvider>
    )
}
export default App
