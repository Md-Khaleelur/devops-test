import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import CurrentlyReadingCard from '../CurrentlyReadingCard/CurrentlyReading'


const useStyles = makeStyles((theme)=>({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    }
 }))


export default function BooksReadingList(props){


    const classes = useStyles();
    
    
    const readingList = props.booksList.map((book) => (
        <CurrentlyReadingCard {...book}/>
    ))

    return(
         <div id='container' className={classes.container}>
            {readingList}
        </div>
    )
}