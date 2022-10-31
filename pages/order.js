import { Stack, Box } from '@mui/material'
import CategoryOrder from '../components/order/CategoryOrder'
import ListOrder from '../components/order/ListOrder'
import CartOrder from '../components/order/CartOrder'

const order = () => {
  return (
    <Stack backgroundColor='#fbfbfb' flexDirection='row' width='100vw'justifyContent='space-around'>
        <Box width='33.33%'>
          <CategoryOrder/>
        </Box>
        <Stack width='33.44%'>
          <ListOrder title='Món nổi bật'/>
          <ListOrder title='Trà Sữa'/>
          <ListOrder title='Fresh Fruit Tea'/>
          <ListOrder title='Macchiato Cream Cheese'/>
          <ListOrder title='Sữa chua dẻo'/>
        </Stack>
        <Box width='33.33%'>
          <CartOrder/>
        </Box>
    </Stack>
  )
}

export default order