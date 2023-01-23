
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import './App.css'
import Main from 'container/Main/Main'
import { useState } from 'react'


type Props = {}

// type TotalData = {
//     totalCount: number
//     totalPrice: number
// }
const App = (props: Props) => {

//     const [totalData, setTotalData] = useState < TotalData > ({
//         totalCount: 0,
//         totalPrice: 0,
//     }
//     )
    
// const addPriceToTotal = (count: number, price: number) => {
//     setTotalData((prevState: TotalData) => ({
//         totalCount: prevState.totalCount + count,
//         totalPrice: prevState.totalPrice + price*count,
//     }))
// }

// const uanPriceToTotal = (count: number, price: number) => {
//     setTotalData((prevState: TotalData) => ({
//         totalCount: 40,
//         totalPrice: prevState.totalPrice + price * count,
//     }))
// }    
    
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Main />
            {/* <Main totalData={totalData}
                addPriceToTotal={addPriceToTotal} */}
            {/* /> */}
        </StyledEngineProvider>
    )
}
export default App
