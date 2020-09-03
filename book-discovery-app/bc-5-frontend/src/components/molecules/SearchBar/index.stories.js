import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import SearchBar from '../SearchBar'


export default{
    title : 'molecules/Search Bar',
    component: SearchBar,
    decorators: [withKnobs]
}

export const SearchBarEmpty = () => {
    return <SearchBar 
    hint = {text('place holder text', "Search here by book title, author or ISBN")}
    searchValue = {text('Enter search value','')}/>
}