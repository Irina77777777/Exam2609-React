import {  Button, Typography } from '@mui/material'
import { count } from 'console'
import Products from 'container/Products/Products'
import { useState } from 'react'

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
     totalPrice: number
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
     totalPrice: 0,
    })

    const addPriceToTotal = (count: number, price: number) => {
        setTotalData((prevState: TotalData) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + price * count,
        }))
    }

    const uanPriceToTotal = (one: number, two: number, three: number,
        va: string, totalPrice: number) => {
        setValData({    
            oneiP: one,
            twoiP: two,
            threeiP: three,
            val: va, 
             totalPrice: 0
}
       ) }

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
            <div className="buttonchiki2">
                <Button
                    variant="outlined"
                    onClick={() =>
                        uanPriceToTotal(
                            30000,
                            40000,
                            50000,
                            'UAN',
                            (totalData.totalPrice = totalData.totalPrice * 40)
                        )
                    }
                >
                    UAN
                </Button>
                <Button
                    variant="outlined"
                    onClick={() =>
                        uanPriceToTotal(
                            750,
                            850,
                            1250,
                            'EUR',
                            (totalData.totalPrice = totalData.totalPrice*1)
                        )
                    }
                >
                    EUR
                </Button>
                <Button
                    variant="outlined"
                    onClick={() =>
                        uanPriceToTotal(
                            1000,
                            2000,
                            3000,
                            'USD',
                            (totalData.totalPrice = totalData.totalPrice * 1.34)
                        )
                    }
                >
                    USD
                </Button>
                <Button
                    variant="outlined"
                    onClick={() =>
                        uanPriceToTotal(
                            3000,
                            4000,
                            5000,
                            'AED',
                            (totalData.totalPrice = totalData.totalPrice * 4)
                        )
                    }
                >
                    AED
                </Button>
                <Button
                    variant="outlined"
                    onClick={() =>
                        addPriceToTotal(0, (totalData.totalPrice = 0))
                    }
                >
                    Total=0
                </Button>
            </div>
            <Products addPriceToTotal={addPriceToTotal} valData={valData} />
            <div> Total: {totalData.totalPrice}</div>
        </>
    )
}
export default Task2
