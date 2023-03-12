import style from '../styles/Home.module.css'
import React, {FC, useState,MouseEvent} from 'react'
import {Post} from "@/types/MyTypes";
import {
    Box,
    Container,
    Typography,
    Divider,
    Paper,
    Table, TableHead, TableRow, TableCell, TableContainer,TableBody
} from "@mui/material";
// import SingleCard from '../components/cards/SingleCard'
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";

interface HomeProps {
    items: Post[]
}



const MyCell = styled(TableCell)(()=>({
    height:100
}))

 const Home:FC<HomeProps> = ({items})=> {

     const router = useRouter()


    return (
         <Container className={style.container}>
            <Box textAlign="center" mt={5}>
                <Typography variant={"h4"}>
                    Топ 100 фильмов
                </Typography>
            </Box>
             <Box className={style.posts_wrapper}>

                 <TableContainer component={Paper}>
                     <Table aria-label='simple table'>
                         <TableHead>
                             <TableRow>
                                 <TableCell>№</TableCell>
                                 <TableCell>Название</TableCell>
                                 <TableCell>Актеры</TableCell>
                                 <TableCell>Рейтинг</TableCell>
                                 <TableCell>Год</TableCell>
                                 <TableCell></TableCell>
                             </TableRow>
                         </TableHead>
                         <TableBody>
                             {items.map(elem=>(
                                 <TableRow hover selected key={elem.id}>
                                     <MyCell >{elem.rank}</MyCell>
                                     <MyCell >
                                         <Link href={'/about'}>
                                            {elem.title}
                                         </Link></MyCell>
                                     <MyCell >{elem.crew}</MyCell>
                                     <MyCell >{elem.imDbRating}</MyCell>
                                     <MyCell >{elem.year}</MyCell>
                                     <MyCell >
                                         <Image  src={elem.image} alt={'text'} height={100} width={65}/>
                                     </MyCell>
                                 </TableRow>
                             ))}
                         </TableBody>
                     </Table>
                 </TableContainer>
             </Box>
         </Container>
     )

}
export default Home
export async function getServerSideProps () {
    const res = await fetch('https://imdb-api.com/en/API/MostPopularMovies/k_appvd73s')
    const cards = await res.json()
    const {items} = cards
    return {
        props: {
            items,
        },
    }
}