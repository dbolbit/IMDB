import style from '../styles/Home.module.css'
import {FC, useState,MouseEvent} from 'react'
import {Post} from "@/types/MyTypes";
import {Box, Card, Container, Typography,CardActions ,CardContent ,CardMedia ,Button,} from "@mui/material";
import SingleCard from '../components/cards/SingleCard'

interface HomeProps {
    items: Post[]
}


 const Home:FC<HomeProps> = ({items})=> {


     return (
         <Container className={style.container}>
            <Box textAlign="center" mt={5}>
                <Typography variant={"h4"}>
                    Топ 250 фильмов
                </Typography>
            </Box>
             <Box className={style.posts_wrapper}>
                <SingleCard/>
             </Box>
         </Container>
     )

}
export default Home
// export async function getStaticProps() {
//     const res = await fetch('https://imdb-api.com/en/API/Top250Movies/k_appvd73s')
//     const cards = await res.json()
//     const {items} = cards
//     return {
//         props: {
//             items,
//         },
//     }
// }