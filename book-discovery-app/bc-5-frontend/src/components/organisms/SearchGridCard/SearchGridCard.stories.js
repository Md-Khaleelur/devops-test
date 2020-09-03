import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import theme from '../../../utils/theme';
import SearchGridCard from "./SearchGridCard";
export default { title: 'organisms/Search Grid Card', decorators: [withKnobs] };

// import data from "./BookCardData"

const useStyles = makeStyles({
    flexContainer: {
        display: "flex",
    }
});

export const GenericSearchGridCard = () => {
    const description = "Physics is the most fundamental of Sciences, that defines all natural laws. Basic physics gives you an understanding and intuition."
    return (
        <ThemeProvider theme={theme}>
            <SearchGridCard title={text("Title", "Basic Physics")} coverImage={text("ImageUrl", "../../../assets/book1.jpg")} description={text("Description", description)} authorName={text("Author", "Carlos Gonzales")} avatarUrl={text("avatarUrl", 'https://gravatar.com/avatar/2b0ac89d67a3000a568c17ae6ef20e8d?s=400&d=robohash&r=x')} value={4} totalReviews={text("TotalRatings", "1024 ratings")} />
        </ThemeProvider>
    )
}

// export const SearchGrid = () => {
//     const classes = useStyles()
//     const items = data.map(item => (<SearchGridCard title={item.title} image={item.image} author={item.author} value={item.value} totalReviews={item.totalReviews} />))
//     return (
//         <ThemeProvider theme={theme}>
//             <div className={classes.flexContainer}>
//                 {items}
//             </div>
//         </ThemeProvider>
//     )
// }
