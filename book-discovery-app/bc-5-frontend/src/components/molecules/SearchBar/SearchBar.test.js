import { render, screen } from '@testing-library/react';
import React from 'react';
import SearchBar from './index';
 
 

describe('<SearchBar /> ', () => {
  it('renders SearchBar element', () => {
      render(<SearchBar />);
      // console.log(RenderComponent)
      expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
    })

  it('received props correctly', () => {
    const hint="Search here by book title, author or ISBN"
    const searchValue="Chemistry" 
    const container = render( < SearchBar 
                                    hint = {hint}
                                    searchValue = {searchValue}
                                    /> )
    // let matches = document.querySelectorAll("div.child > ");
    expect(container.firstChild).toMatchSnapshot()
  })


  it('Matches snapshot', () => {
    const hint="Search here by book title, author or ISBN"
    const searchValue="Chemistry" 
    const snap =  render( < SearchBar 
                            hint = {hint}
                            searchValue = {searchValue}
                            /> )
    expect(snap).toMatchSnapshot()
  })
})
