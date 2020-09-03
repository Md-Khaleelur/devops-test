import { render, screen } from '@testing-library/react';
import React from 'react';
import SearchCard from './SearchCard';
 
 

describe('<SearchCard /> ', () => {
  it('renders SearchCard element', () => {
      render(<SearchCard />);
      expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
    })

  it('received props correctly', () => {
    const bookName="Inorganic Chemistry" 
    const authorName="Joe Pearson" 
    const category="Chemistry"
    const coverImage="../../../assets/chem.jpg"
    const { getByText } = render( <SearchCard bookName = {bookName} coverImage={coverImage} authorName={authorName} category={category} /> )
        expect(getByText('Field :')).toBeDefined()
  })


  it('Matches snapshot', () => {
    const bookName="Inorganic Chemistry" 
    const authorName="Joe Pearson" 
    const category="Chemistry"
    const coverImage="../../../assets/chem.jpg"
    const snap = render( <SearchCard bookName = {bookName} coverImage={coverImage} authorName={authorName} category={category}/> )
        expect(snap).toMatchSnapshot()
    })
})
