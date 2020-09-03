import { ThemeProvider } from '@material-ui/core/styles';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import theme from '../../../utils/theme';
import SearchResult from './SearchResult';
export default { title: 'organisms/Search Result', decorators: [withKnobs] };




export const CurrentSearchCard = () => {
    return (
        <ThemeProvider theme={theme}>
            <div style={{width:'400px', height:'56px'}}>
                <SearchResult />
            </div>
        </ThemeProvider>
    )
}