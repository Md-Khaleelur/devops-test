import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { currentlyReadBorder, primayFill500, searchCardTitle } from "../../../utils/colorPallete";
import ArrowIcon from '../../atoms/ArrowRightIcon/ArrowRightIcon';
import SearchCard from '../SearchCard/SearchCard';


const useStyles = makeStyles({
    container: {
        width: 'inherit',
        maxHeight: "420px",
        border: "solid 1px",
        borderColor: currentlyReadBorder,
        borderRadius: "4px",
        overflow: "visible",
        zIndex: 100,
    },
    empty: {

        width: 'inherit',
        height: "56px",
        border: "solid 1px",
        borderColor: currentlyReadBorder,
        borderRadius: "4px",
        marginTop: '0px',
        backgroundColor: 'white',
        zIndex: 100,
    },
    text: {
        width: 'inherit',
        color: searchCardTitle,
        marginTop: "12px",
        fontSize: "14px",
    },
    link: {
        // width: "398px",
        display: "flex",
        alignSelf: "center",
        backgroundColor: 'white',
        height: "45px",
        border: 'solid 1px',
        borderColor: currentlyReadBorder,
        borderRadius: "0px 0px 4px 4px",
    },
    more: {
        marginLeft: "63px",
        fontSize: "14px",
        alignSelf: 'center',
        marginBottom: "18px",
        color: primayFill500,
        marginTop: "8px",
        borderColor: currentlyReadBorder
    },
    icon: {
        marginLeft: "7px",
        width: '20px',
        paddingTop: "11px",
    }
})

export default function SearchResult(props) {

    const classes = useStyles();
    const [books, setBooks] = useState([])

    let url = props.searchValue !== "" ? "http://localhost:8080/search?keyword=*" + props.searchValue + "*" : ''
    // let url = props.searchValue !== "" ? "https://bootcamp5-mockserver.herokuapp.com/books/?q=" + props.searchValue + "&_expand=author&_expand=category" : ''
    // console.log(url);
    const fetchData = async () => {
        if (props.searchValue) {
            const result = await axios.get(url);
            setBooks(result.data)
        } else {
            setBooks([]);

        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    console.log('Searched Books:', books);

    const searchItems = books[0] ? books.slice(0, 4).map(item => (<SearchCard
        key={item.id}
        bookName={item.title}
        coverImage={item.cover_image}
        authorName={item.author_name}
        category={item.category_name}
    />)) : null;

    return (
        <div className={classes.container}>
            {books[0] ?
                <>{searchItems}
                    <div className={classes.link}>
                        <Typography className={classes.more}>
                            <Link to={`/search/${props.searchValue}`}> See all result
                                <ArrowIcon className={classes.icon} />
                            </Link>
                        </Typography>
                    </div>
                </> :
                <div className={classes.empty}>
                    <Typography className={classes.text} align="center">
                        No results found. Please try a different book.
                 </Typography>
                </div>
            }
        </div>
    )
}