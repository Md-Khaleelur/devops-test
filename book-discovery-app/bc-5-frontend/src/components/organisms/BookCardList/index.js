import { makeStyles } from '@material-ui/core';
import React from 'react';
import BookCard from '../BookCard/BookCard';


const useStyles = makeStyles(theme => ({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    }
}))

export default function BookCardList(props){

    const classes = useStyles();

    const listItems = props.booksList.map((book) => (
        <BookCard {...book}/>
    ))

    return(
        <div id='bookCardContainer' className = {classes.container}>
            {listItems}
        </div>
    )

}