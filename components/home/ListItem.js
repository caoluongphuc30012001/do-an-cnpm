import { Box, Typography, Stack } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import homeStyles from '../../styles/Home.module.css'
import Item from './Item'
import Homeline from '../../assets/image/home_line.webp'
import TraSua from '../../assets/image/O-Long-xoai-kem-coffee.jpg'
import Matcha from '../../assets/image/Tra-Sua-Matcha-1-copy.jpg'
import Tradao from '../../assets/image/Tra-dao-buoi-hong-tran-chau-baby.jpg'
import Traman from '../../assets/image/tra-man-hat-sen.png'
import Traxoai from '../../assets/image/trà-xoài-bưởi-hồng.png'
import Tiger from '../../assets/image/tiger-sugar.jpg'
import TraSuaHanhPhuc from '../../assets/image/Tra-Sua-Hanh-Phuc-1-copy.jpg'
import Ngucoc from '../../assets/image/Hình-ảnh-sp-website_1000x1000_choco-ngũ-cốc-kem-cafe.png'
import Olongkem from '../../assets/image/oolong-kem-pho-mai_75e8d3f11fb3402196416da77c8ff33a_grande.png'

const fakeApi = [
    {
        id: '1',
        price: '69.000 VND',
        name: 'Trà Sữa Truyền Thống',
        image: TraSua,
    },
    {
        id: '2',
        price: '69.000 VND',
        name: 'Trà Sữa Matcha',
        image: Matcha,
    },
    {
        id: '3',
        price: '69.000 VND',
        name: 'Trà Đào',
        image: Tradao,
    },
    {
        id: '4',
        price: '69.000 VND',
        name: 'Trà Mận',
        image: Traman,
    },
    {
        id: '5',
        price: '69.000 VND',
        name: 'Trà Xoài Bưởi Hồng',
        image: Traxoai,
    },
    {
        id: '6',
        price: '69.000 VND',
        name: 'Tiger Sugar',
        image: Tiger,
    },
    {
        id: '7',
        price: '69.000 VND',
        name: 'Trà Sữa Hạnh Phúc',
        image: TraSuaHanhPhuc,
    },
    {
        id: '8',
        price: '69.000 VND',
        name: 'Ngũ Cốc Kem',
        image: Ngucoc,
    },
    {
        id: '9',
        price: '69.000 VND',
        name: 'Ô Long Kem Phô Mai',
        image: Olongkem,
    },
    
]

const ListItem = ({ title, description }) => {
  return (
    <Stack
        flexDirection='column'
        width='100%'
        justifyContent='center'
        alignItems='center'
        mt='60px'
        id='home'
    >
        <Typography p='10px' textTransform='uppercase' color='#d3b673' variant='h3' fontSize='25px' fontWeight={700}>{title}</Typography>
        <Typography p='10px' textTransform='uppercase' letterSpacing={1.8} fontWeight='700' fontSize='36px' color='#00000'>{description}</Typography>
        <Image src={Homeline} alt='home-line'/>
        <Stack
            width='70%'
            flexDirection='row'
            flexWrap='wrap'
            justifyContent='center'
            m='30px 0'
        >   
            {fakeApi.map(item => (<Item key={item.id} item={item} title=''/>))}
            <Box className={homeStyles.mainButton} mt='20px' p='10px 20px' backgroundColor='#d3b673' borderRadius='6px' style={{cursor: 'pointer'}}>
                <Link href='/order'>
                    <Typography className={homeStyles.textButton} textTransform='uppercase' color='#fff'>Xem tất cả</Typography>
                </Link>
            </Box>
        </Stack>
    </Stack>
  )
}

export default ListItem