import { Grid } from "@mui/material"
import ProductListItem from "./ProductListItem"

type Props = {
    addPriceToTotal: (count: number, price: number) => void
    valData: {
        oneiP: number
    twoiP: number
        threeiP: number
    val: string
}
}
const Products = ({ addPriceToTotal, valData }: Props) => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={4}
        >
            <Grid item>
                <ProductListItem
                    title="iPhone 12"
                    desc="This is iPhone 12..."
                    price={valData.oneiP}
                    valu={valData.val}
                    addPriceToTotal={addPriceToTotal}
                />
            </Grid>
            <Grid item>
                <ProductListItem
                    title="iPhone 8"
                    desc="This is iPhone 8..."
                    price={valData.twoiP}
                    valu={valData.val}
                    addPriceToTotal={addPriceToTotal}
                />
            </Grid>
            <Grid item>
                <ProductListItem
                    title="iPhone X"
                    desc="This is iPhone X..."
                    price={valData.threeiP}
                    valu={valData.val}
                    addPriceToTotal={addPriceToTotal}
                />
            </Grid>
        </Grid>
    )
}
export default Products
