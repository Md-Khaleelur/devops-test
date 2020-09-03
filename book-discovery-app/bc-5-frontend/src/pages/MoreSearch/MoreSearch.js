import { Typography } from '@material-ui/core';
import { common } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDownIcon from '@material-ui/icons/ArrowDropDown';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PrimaryButton from '../../components/molecules/PrimaryButton/index';
import GridList from '../../components/organisms/GridList/GridList';
import { currentlyReadBorder, iconFill, primayFill500, trasparentFill } from "../../utils/colorPallete";
import theme from '../../utils/theme';


const useStyles = makeStyles(() => ({
    root: {
        // display: 'flex',
        flexGrow: 1,
        maxWidth: "1110px",
        margin:'auto',
        paddingTop:'30px',
        paddingBottom:'70px'        
    },
    container: {
        width: '444px',
        maxHeight: "420px",
        border: "solid 1px",
        borderColor: iconFill,
        borderRadius: "4px",
        overflow: "visible",
        zIndex: 100,
    },
    empty: {
        width: 'inherit',
        height: "56px",
        border: "solid 1px",
        borderColor: iconFill,
        borderRadius: "4px",
        marginTop: '0px',
        backgroundColor: 'white',
        zIndex: 100,
    },
    dropDownButton: {
        backgroundColor: common.white,
        borderColor: 'currentColor',
        padding: '6px 8px',
        fontSize: '14px',
        textTransform: 'capitalize',
        marginRight: '24px'
    },
    selectedButton: {
        backgroundColor: common.white,
        color: theme.palette.primary.main,
        borderColor: 'currentColor',
        padding: '6px 8px',
        fontSize: '14px',
        textTransform: 'capitalize',
        marginRight: '24px'
    },
    // buttonText: {
    //     fontSize: '14px'
    // },
    page: {
        width: 'inherit',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    pagination: {
        marginTop: "58px",
        margin: 'auto',
        width: 'fit-content',
    },
    icons: {
        fill: primayFill500,
        backgroundColor: trasparentFill,
        // border: 'solid 1px',
        border: "solid 1px",
        borderColor: currentlyReadBorder,
        borderRadius: "4px",

    },
    tag: {
        fontSize: "22px",
        display: 'flex',
        paddingTop: "28px",
        paddingBottom: "17px",
    },

}));

const buttons = {
    sort: 'Sort by',
    categories: 'Categories',
}

export default function MoreSearch(props) {

    const classes = useStyles();
    const [isSelected, setSelected] = useState(buttons.home)
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ booksPerPage ] = useState(8);

    const handleChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    function handleOnClick(key) {
        setSelected(key);
    }

    const searchValue = props.match.params.keyword;
    console.log("Search keyword:", searchValue)  

    let url = searchValue !== "" ? "https://bootcamp5-mockserver.herokuapp.com/books/?q=" + searchValue + "&_expand=author&_expand=category" : ''
    // let url = searchValue !== "" ? "http://a810da6f43b4643c0a3a5251032d3651-1771357213.us-east-2.elb.amazonaws.com:8080/search?keyword=*" + searchValue + "*" : ''


    const fetchSearchData = async () => {
        try {
            const result = await axios.get(url);
            setBooks(result.data);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if (searchValue) {
            fetchSearchData();
        } else {
            setBooks([]);
        }
    }, [url]);

    console.log("Queried books", books);
    console.log("Current Page", currentPage);

    // Pagination array count
    const PaginationCount = Math.ceil(books.length / booksPerPage);

    // Get current page
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    return (
        <div className={classes.root}>
            {books[0] ?
                <div className={classes.page}>
                    <PrimaryButton variant='outlined' endIcon={<ArrowDownIcon/>} style={{marginRight: "24px"}} >Sort by</PrimaryButton>
                    <PrimaryButton variant='outlined' endIcon={<ArrowDownIcon/>} >Categories</PrimaryButton>

                    <Typography className={classes.tag}>
                        Search Results for &nbsp;
                        <Typography style={{ fontWeight: "500", fontSize: "22px" }} >
                            " {searchValue} "&nbsp;
                        </Typography>
                        <Typography style={{ fontSize: "16px", color: "#9ea0a5", marginTop: "6px" }}>
                            {indexOfFirstBook + 1}-{indexOfLastBook} page of {books.length + 1} results
                        </Typography>
                    </Typography>
                    <GridList books={currentBooks} alignContent="center" />
                    <div className={classes.pagination}>
                        <Pagination
                            className={classes.icons}
                            count={PaginationCount}
                            page={currentPage}
                            onChange={handleChange}
                            defaultPage={1}
                            shape="rounded"
                            color="primary"
                        />
                    </div>
                </div> :
                <div className={classes.empty}>
                    <Typography className={classes.text} align="center">
                        No results found. Please try a different book.
                    </Typography>
                </div>
            }
        </div>
    );

}