import { makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import TopicsCard from '../../molecules/TopicsCard/TopicsCard'


const useStyles = makeStyles(theme => ({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
    }
}))


export default function TopicsFollowingList(props){
    
    const [topicsList, setTopicsList] = useState([])

    const classes = useStyles();

    useEffect(()=> {
        fetch('https://bootcamp5-mockserver.herokuapp.com/categories?id_ne=2')
        .then(response => response.json())
        .then(data => {setTopicsList(data.slice(0,6)); console.log(data)})

        // setTopicsList(TopicsData)
    },[])

    const listItems = topicsList.map((topic) => (
        <TopicsCard {...topic}/>
    ))
    
    return(
        <div className={classes.container}>
            {listItems}
        </div>
    )
}