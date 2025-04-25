import React from 'react'; 
import styles from './BookCard.module.css';

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i 
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : '/placeholder.jpg';

  return (
    <div className={styles.card}>
      <img 
        src={coverUrl} 
        alt={book.title} 
        className={styles.cover}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{book.title}</h3>
        <p className={styles.author}>
          {book.author_name?.join(', ') || 'Unknown Author'}
        </p>
      </div>
    </div>
  );
};

export default BookCard;