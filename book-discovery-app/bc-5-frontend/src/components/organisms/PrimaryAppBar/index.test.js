import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PrimaryAppBar from '../PrimaryAppBar';
 


describe('<PrimaryAppBar/> ', () => {

  it('Matches snapshot', () => { 
    const avatarUrl = "https://robohash.org/autquiet.jpg?size=50x50&set=set1"
    const snap = render(<Router> <PrimaryAppBar avatarUrl={avatarUrl}/></Router> )
        expect(snap).toMatchSnapshot()
    })
})