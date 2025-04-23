import styles from './BookList.module.css';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  return (
    <div className={styles.grid}>
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
};

export default BookList;