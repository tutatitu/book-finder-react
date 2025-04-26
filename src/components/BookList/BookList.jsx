import React from 'react';
import styles from './BookList.module.css';
import BookCard from '../BookCard/BookCard';

const BookList = ({ books, onBookSelect }) => {
  if (!books || !Array.isArray(books)) {
    return (
      <div className={styles.grid}>
        <p>No books found or data is loading...</p>
      </div>
    );
  }

    return (
    <div className={styles.grid}>
      {books.map((book) => (
        <BookCard
          key={book.key}
          book={book}
          onBookSelect={onBookSelect}
        />
      ))}
    </div>
  );
};

BookList.defaultProps = {
  books: []
};

export default BookList;