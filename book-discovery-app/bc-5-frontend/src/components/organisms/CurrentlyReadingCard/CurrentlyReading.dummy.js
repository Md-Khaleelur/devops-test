import { render, screen } from '@testing-library/react';
import React from 'react';
import CurrentlyReading from './CurrentlyReading';



describe('<CurrentlyReading /> ', () => {
  it('renders CurrentlyReading card element', () => {
    render(<CurrentlyReading />);
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  })

  it('received props correctly', () => {
    const bookName = "Inorganic Chemistry"
    const author = { name: "Joe Pearson" }
    const category = { name: "Chemistry" }
    const currentPage = "15"
    const totalPages = "239"
    const { getByText } = render(<CurrentlyReading title={bookName}  category={category} currentPages={currentPage} pages={totalPages} />)
    expect(getByText('Category:')).toBeDefined()
  })


  it('Matches snapshot', () => {
    const bookName = "Inorganic Chemistry"
    const author = { name: "Joe Pearson" }
    const category = { name: "Chemistry" }
    const currentPage = "15"
    const totalPages = "239"
    const snap = render(< CurrentlyReading title={bookName}  category={category} currentPages={currentPage} pages={totalPages} />)
    expect(snap).toMatchSnapshot()
  })
})
