import React from 'react'; 
import styles from './BookCard.module.css';

const BookCard = ({ book, onBookSelect }) => {
  const getDescription = () => {
    const description = 
      book.description?.value ||  // для формата {value: ...}
      book.description ||         // прямая строка
      book.first_sentence?.[0] || // первое предложение
      'Описание отсутствует';

    return description.length > 120 
      ? `${description.substring(0, 120)}...` 
      : description;
  };
  return (
    <div className={styles.card} onClick={() => onBookSelect(book)}>
          <img src={book.cover_i ?
              `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` :
              'https://placehold.co/2000x2000/transparent/e74c3c?text=No+Cover+Available'}
            alt={book.title}
            className={styles.cover}
      />
        <h3 className={styles.title}>{book.title}</h3>
        <p className={styles.author}>{book.author_name?.join(', ') || 'Автор неизвестен'}</p>
        
        <p className={styles.description}>
            {getDescription()}
        </p>
    </div>
  );
};

export default BookCard;