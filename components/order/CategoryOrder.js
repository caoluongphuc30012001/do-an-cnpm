import React from 'react'
import { Stack, Typography } from '@mui/material'

const Category = () => {
  return (
    <>
      <Stack p='20px' justifyContent='center' backgroundColor='#fff' m='10px 100px' borderRadius='5px' height='fit-content' boxShadow='0 2px 7px 0 rgb(0 0 0 / 5%)'>
        <Stack sx={{cursor: 'pointer'}} p='10px' flexDirection='row' justifyContent='space-between' alignItems='center' borderBottom='1px solid #f1f1f1'>
            <Typography ml='10px' fontSize='14px' variant='h2' fontWeight={700}>DANH MỤC</Typography>
        </Stack>
        <Stack sx={{cursor: 'pointer'}} p='10px' flexDirection='row' justifyContent='space-between' alignItems='center' borderBottom='1px solid #f1f1f1'>
          <Typography fontSize='14px' variant='h3' color='#282828'>Món nổi bật</Typography>
          <Typography fontSize='14px' variant='h3' color='#282828'>22</Typography>
        </Stack>
        <Stack sx={{cursor: 'pointer'}} p='10px' flexDirection='row' justifyContent='space-between' alignItems='center' borderBottom='1px solid #f1f1f1'>
          <Typography fontSize='14px' variant='h3' color='#282828'>Trà Sữa</Typography>
          <Typography fontSize='14px' variant='h3' color='#282828'>13</Typography>
        </Stack>
        <Stack sx={{cursor: 'pointer'}} p='10px' flexDirection='row' justifyContent='space-between' alignItems='center' borderBottom='1px solid #f1f1f1'>
          <Typography fontSize='14px' variant='h3' color='#282828'>Fresh Fruit Tea</Typography>
          <Typography fontSize='14px' variant='h3' color='#282828'>9</Typography>
        </Stack>
        <Stack sx={{cursor: 'pointer'}} p='10px' flexDirection='row' justifyContent='space-between' alignItems='center' borderBottom='1px solid #f1f1f1'>
          <Typography fontSize='14px' variant='h3' color='#282828'>Macchiato Cream Cheese</Typography>
          <Typography fontSize='14px' variant='h3' color='#282828'>7</Typography>
        </Stack>
        <Stack sx={{cursor: 'pointer'}} p='10px' flexDirection='row' justifyContent='space-between' alignItems='center' borderBottom='1px solid #f1f1f1'>
          <Typography fontSize='14px' variant='h3' color='#282828'>Sữa Chua Dẻo</Typography>
          <Typography fontSize='14px' variant='h3' color='#282828'>4</Typography>
        </Stack>
      </Stack>
    </>
  )
}

export default Category