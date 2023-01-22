import { Grid } from "@mui/material"
import ProductListItem from "./ProductListItem"

type Props = {}
const Products = (props: Props) => {
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
                  />
              </Grid>
              <Grid item>
                  <ProductListItem
                      title="iPhone 8"
                      desc="This is iPhone 8..."
                      price={850}
                  />
              </Grid>
              <Grid item>
                  <ProductListItem
                      title="iPhone X"
                      desc="This is iPhone X..."
                      price={1250}
                  />
              </Grid>
          </Grid>
      </>
  )
}
export default Products
