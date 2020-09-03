import { makeStyles } from '@material-ui/core';
import React from 'react';
import OverviewCard from '../ShelfCard/ShelfCard';


const useStyles = makeStyles((theme)=>({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    }
 }))


export default function OverviewList(props){
    const classes = useStyles();


    const overViewsList = props.overviews.map((overview) => (<OverviewCard {...overview}/>))


    return(
        <div id='container' className={classes.container}>
            {overViewsList}
        </div>
    )

}