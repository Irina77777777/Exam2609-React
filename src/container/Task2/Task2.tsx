import {  Button, Typography } from '@mui/material'
import Products from 'container/Products/Products'
import { useState } from 'react'
import valArray from './Task2'

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
    count: number
    tot1: number
}


const Task2 = ( price: Props
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
        totalPrice: 1,
        count: 1,
        tot1: totalData.totalPrice
    })

    const uanPriceToTotal = (
        va: string,
        totalPrice: number,
        count: number
    ) => {
        setValData({
            oneiP: 750 * count,
            twoiP: 850 * count,
            threeiP: 1250 * count,
            val: va,
            totalPrice: totalPrice,
            count: 1,
            tot1: totalPrice * count
        })
    }

       // setValData((prevStat: ValData) => ({
         //   ...prevStat,
          //  one: prevStat.oneiP === 2250 ? (count = 10) : (count = 5),
           // two: prevStat.twoiP === 850 ? (count = 2) : (count = 3),
            //three: prevStat.threeiP === 50000 ? (count = 40) : (count = 0.025),
            // va:prevStat.val === 'va' ? count=1 : count=1,
             //oneiP: 750 * count,
            //  twoiP: 850 * count,
            //  threeiP: 1250 * count,
           // oneiP: one,
          //  twoiP: two,
            //threeiP: three,
            // val: va,
            // totalPrice: prevStat.totalPrice * count,
       // }))
   // }

    const addPriceToTotal = (count: number, price: number) => {
        setTotalData((prevState: TotalData) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + price * count,
        }))
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
            {valArray}
            {/* <div> tot1 {valData.tot1}</div> */}
            <div className="buttonchiki2">
                <Button
                    variant="outlined"
                    onClick={() =>
                        uanPriceToTotal(
                            'UAN',
                            (valData.tot1 = totalData.totalPrice * 40),
                            40 
                        )
                    }
                >
                    UAN
                </Button>
                <Button
                    variant="outlined"
                    onClick={() =>
                        uanPriceToTotal(
                            'EUR',
                            (totalData.totalPrice = Math.round(
                                totalData.totalPrice * 1
                            )),
                            1
                            //  valData.count
                        )
                    }
                >
                    EUR
                </Button>
                <Button
                    variant="outlined"
                    onClick={() =>
                        uanPriceToTotal(
                            'USD',
                            (valData.tot1 = Math.round(
                                totalData.totalPrice * 1.05
                            )),
                            1.05
                        )
                    }
                >
                    USD
                </Button>
                <Button
                    variant="outlined"
                    onClick={() =>
                        uanPriceToTotal(
                            'AED',
                            (valData.tot1 = Math.round(
                                totalData.totalPrice * 3.8
                            )),
                            3.8
                            // valData.count,
                            // (valData.tot = Math.round(totalData.totalPrice / 4))
                        )
                    }
                >
                    AED
                </Button>
                {/* <Button
                    variant="outlined"
                    onClick={() =>
                        addPriceToTotal(0, (totalData.totalPrice = 0))
                    }
                >
                    Total=0
                </Button> */}
            </div>
            <Products addPriceToTotal={addPriceToTotal} valData={valData} />
            <div>
                {' '}
                Total: {valData.tot1 === 0 ? totalData.totalPrice : valData.tot1}
            </div>
        </>
    )
}
export default Task2
