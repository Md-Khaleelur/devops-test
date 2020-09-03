import { render, screen } from '@testing-library/react';
import React from 'react';
import TopicsCard from './TopicsCard';
 
 

describe('<TopicsCard /> ', () => {
  it('renders TopicsCard card element', () => {
      render(<TopicsCard />);
      expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
    })

  it('received props correctly', () => {
    const image = "../../../assets/chemistry.jpg" 
    const subject = "Chemistry"
    const { getByText } = render( <TopicsCard image = {image} name = {subject}/> )
        expect(getByText("Chemistry")).toBeTruthy
  })


  it('Matches snapshot', () => {
    const image = "../../../assets/chemistry.jpg" 
    const subject = "Chemistry"
    const snap = render( <TopicsCard image = {image} name = {subject}/> )
        expect(snap).toMatchSnapshot()
    })
})
