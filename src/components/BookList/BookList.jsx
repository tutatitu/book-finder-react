import React from 'react';
import styles from './BookList.module.css';
import BookCard from '../BookCard/BookCard';

const BookList = ({ books }) => {
  // Добавьте проверку на наличие данных
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
          key={book.key || Math.random()} // Добавьте fallback для key
          book={book} 
        />
      ))}
    </div>
  );
};

// Установите значения по умолчанию для props
BookList.defaultProps = {
  books: []
};

export default BookList;