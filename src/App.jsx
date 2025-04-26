import React, { useState } from 'react'; 
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import BookList from './components/BookList/BookList';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import BookDetailsModal from './components/BookDetailsModal/BookDetailsModal';
import useBookSearch from './hooks/useBookSearch';
import './App.css';
import './index.css'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { books, loading, error } = useBookSearch(searchQuery);
  const [selectedBook, setSelectedBook] = useState(null);
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleBookSelect = (book) => {
    console.log("Selected book:", book);
    setSelectedBook(book);
    };

  return (
    <div className="app">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">{error}</div>}
      <BookList 
        books={books} 
        onBookSelect={handleBookSelect}
      />
      {selectedBook && (
        <BookDetailsModal 
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
      <ThemeToggle />
    </div>
  );
};

export default App;