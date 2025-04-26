import React from 'react';
import styles from './BookDetailsModal.module.css';

const BookDetailsModal = ({ book, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>{book.title}</h2>
        <div className={styles.content}>
          {book.cover_i && (
            <img 
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} 
              alt={book.title}
              className={styles.modalCover}
            />
          )}
          <div className={styles.details}>
            <p><strong>Авторы:</strong> {book.author_name?.join(', ') || 'Неизвестно'}</p>
            <p><strong>Год публикации:</strong> {book.first_publish_year || 'Неизвестно'}</p>
            {book.description && (
              <p><strong>Описание:</strong> {typeof book.description === 'string' 
                ? book.description 
                : book.description.value}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default BookDetailsModal;