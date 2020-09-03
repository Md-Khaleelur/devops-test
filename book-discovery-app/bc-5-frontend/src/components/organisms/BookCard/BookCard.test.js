import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookCard from './BookCard';



describe('<ShelfCard /> ', () => {
  it('received props correctly', () => {
    const title = "Basic Physics"
    const image = "../../../assets/book1.jpg"
    const author = { name: "Carlos Gonzales" }
    const value = 4
    const totalReviews = "1024 ratings"
    const { getByText } = render(<Router>
      <BookCard title={title} coverImage={image} author={author} avgRating={value} totalReviews={totalReviews} />
    </Router>)
    expect(getByText('Basic Physics')).toBeDefined()
  })


  it('Matches snapshot', () => {
    const title = "Basic Physics"
    const image = "../../../assets/book1.jpg"
    const author = { name: "Carlos Gonzales" }
    const value = 4
    const totalReviews = "1024 ratings"
    const snap = render(<Router><BookCard title={title} coverImage={image} author={author} avgRating={value} totalReviews={totalReviews} /></Router>)
    expect(snap).toMatchSnapshot()
  })
})
