import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import SearchGridCard from '../SearchGridCard/SearchGridCard';

const useStyles = makeStyles((theme) => ({
    container: {
        flexGrow: 1,
        maxWidth: "1110px",
        alignContent: "center",
    },

}));

export default function GridList(props) {
    const classes = useStyles();


    return (
        <div className={classes.container}>
        <Grid container spacing={4} alignItems="center">
            {props.books.map(book => (
                <Grid item xs={6} sm={6}>
                    <SearchGridCard
                        key={book.id}
                        title={book.title}
                        description={book.description}
                        avatarUrl={'https://i.pravatar.cc/100'}
                        coverImage={book.coverImage}
                        authorName={book.author.name}
                        value={4}
                        totalReviews={'1,024 reviews'}
                    />
                </Grid>
            ))}
        </Grid>
        </div>
    );
}