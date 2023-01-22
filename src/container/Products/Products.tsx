import { Grid } from "@mui/material"
import ProductListItem from "./ProductListItem"

type Props = {
    addPriceToTotal: (count: number, price: number) => void
}
const Products = ({addPriceToTotal}: Props) => {
  return (
      <>
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
                      price={750}
                      addPriceToTotal={addPriceToTotal}
                  />
              </Grid>
              <Grid item>
                  <ProductListItem
                      title="iPhone 8"
                      desc="This is iPhone 8..."
                      price={850}
                      addPriceToTotal={addPriceToTotal}
                  />
              </Grid>
              <Grid item>
                  <ProductListItem
                      title="iPhone X"
                      desc="This is iPhone X..."
                      price={1250}
                      addPriceToTotal={addPriceToTotal}
                  />
              </Grid>
          </Grid>
      </>
  )
}
export default Products
