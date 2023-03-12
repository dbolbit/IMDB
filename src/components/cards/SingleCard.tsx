import {FC, useEffect} from "react";
import style from './../../styles/Home.module.css'
import Image from "next/image";
import {Post} from "@/types/MyTypes";
import {ListItem, ListItemIcon, ListItemText, ListItemButton, TableContainer, Table,Paper,TableHead,TableCell,TableRow} from "@mui/material";

interface CardProps {
    item:Post
}
const SingleCard:FC<CardProps> = ({item}) => {
    const {id,image,title,imDbRating,rank} = item

    return (
        // <ListItem button divider>
        //     <ListItemText>
        //         <strong>{rank}.</strong> {title}
        //     </ListItemText>
        //     <ListItemButton>
        //         Button
        //     </ListItemButton>
        //     <ListItemIcon>
        //         <Image src={image} alt={'alt'} width={40} height={60}/>
        //     </ListItemIcon>
        // </ListItem>
        null
    )
}

export default SingleCard;