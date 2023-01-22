import { Button, Card, CardActions, CardContent } from "@mui/material"
import './ProductListItem.css'

type Props = {
    title: string
    desc: string
    price: number
}
const ProductListItem = ({ title, desc, price }: Props) => {
  return (
      <Card className="product">
          <CardContent>
              <div className="product-title">{ title}</div>
              <div className="product-desc">{ desc}</div>
              <div className="product-price"> <span>EUR: </span> {price}</div>
          </CardContent>
          <CardActions className="btns-wrap"> 
              <Button variant="outlined">Buy
                  
              </Button>
          </CardActions>
      </Card>
  )
}
export default ProductListItem