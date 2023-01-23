import {  Button, Typography } from '@mui/material'
import Products from 'container/Products/Products'
import { useState } from 'react'
// type Props = {
//     totalData: {
//         totalCount: number
//         totalPrice: number
//     }
//     addPriceToTotal: (count: number, price: number) => void
// }
type Props = {
}

type TotalData = {
    totalCount: number
    totalPrice: number
}
type ValData = {
    oneiP: number
    twoiP: number
    threeiP: number
    val: string
}

const Task2 = (price: Props
) => {
    const [totalData, setTotalData] = useState<TotalData>({
        totalCount: 1,
        totalPrice: 0,
    })

    const [valData, setValData] = useState<ValData>({
    oneiP: 750,
    twoiP:  850,
    threeiP: 1250,
    val: 'EUR',
    })

    const addPriceToTotal = (count: number, price: number) => {
        setTotalData((prevState: TotalData) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + price * count,
        }))
    }

    const uanPriceToTotal = (one: number, two: number, three: number, va: string) => {
        setValData({    
            oneiP: one,
            twoiP: two,
            threeiP: three,
            val: va, 
        })
    }

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
                <Button
                    variant="outlined"
                    onClick={() => uanPriceToTotal(30000, 40000, 50000, 'UAN')}
                >
                    UAN
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => uanPriceToTotal(750, 850, 1250, 'EUR')}
                >
                    EUR
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => uanPriceToTotal(1000, 2000, 3000, 'USD')}
                >
                    USD
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => uanPriceToTotal(3000, 4000, 5000, 'AED')}
                >
                    AED
                </Button>
                <Button variant="outlined"
                    onClick={() => addPriceToTotal(0, totalData.totalPrice = 0)}>
                    Total=0
                </Button>
            </div>
            <Products addPriceToTotal={addPriceToTotal} valData={valData} />
            <div> Total: {totalData.totalPrice}</div>
        </>
    )
}
export default Task2
