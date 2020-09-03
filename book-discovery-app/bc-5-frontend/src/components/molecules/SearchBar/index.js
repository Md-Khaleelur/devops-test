import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { currentlyReadBorder, iconFill } from '../../../utils/colorPallete';
import SearchResult from '../../organisms/SearchResult/SearchResult';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        height: 38,
        border: '1px solid',
        borderColor: currentlyReadBorder,
        boxShadow: `0px 1px 1px ${theme.palette.grey[300]}`
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color: { iconFill },
        fontWeight: 'normal'
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    parent: {
        position: 'relative',
    },
    child: {
        position: 'absolute',
        top: '40px',
    }
}));


export default function SearchBar(props) {
    const [searchValue, setSearchValue] = useState("")

    function handleInputChange(event) {
        event.preventDefault()
        setSearchValue(event.target.value)
    }

    function handleCloseIconClick(event) {
        event.preventDefault()
        setSearchValue("")
    }

    const classes = useStyles()

    return (
        <div className={classes.parent}>
            <Paper component="form" className={classes.root} elevation={0}>
                <IconButton type="submit" className={classes.iconButton} aria-label="menu">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    value={searchValue}
                    className={classes.input}
                    type='text'
                    placeholder={props.hint !== "" ? props.hint : "Enter text to search"}
                    inputProps={{ 'aria-label': 'Search here by book title, author or ISBN' }}
                    onChange={(event) => handleInputChange(event)}
                    fullWidth={true}
                    multiline={true}
                    rowsMax={2}
                    style={{ textOverflow: 'ellipsis'}}
                />
                {searchValue !== "" &&
                    <IconButton onClick={(event) => handleCloseIconClick(event)} className={classes.iconButton} aria-label="search">
                        <CloseIcon />
                    </IconButton>
                }

            </Paper>
            <div className={classes.child}>
                {searchValue !== "" &&
                    <div style={{ flexDirection: "column", marginTop: "2px", borderRadius: "4px", zIndex: '90' }}>
                        <SearchResult
                            searchValue={searchValue}
                        />
                    </div>
                }
            </div>
        </div>
    )
}