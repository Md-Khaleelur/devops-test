import { render } from '@testing-library/react';
import React from 'react';
import ShelfCard from './ShelfCard';
 
 

describe('<ShelfCard /> ', () => {
  it('received props correctly', () => {
    const name = "CURRENTLY READING"
    const number = "6"
    const { getByText } = render( <ShelfCard name={name} number={number} /> )
        expect(getByText('CURRENTLY READING')).toBeDefined()
  })


  it('Matches snapshot', () => { 
    const name = "CURRENTLY READING"
    const number = "6"
    const snap = render( <ShelfCard name={name} number={number} /> )
        expect(snap).toMatchSnapshot()
    })
})
