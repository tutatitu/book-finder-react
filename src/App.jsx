import React, { useState } from 'react'; 
import { useTheme } from './contexts/ThemeContext';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import BookList from './components/BookList/BookList';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import useBookSearch from './hooks/useBookSearch';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { books, loading, error } = useBookSearch(searchQuery);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="app">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">{error}</div>}
      <BookList books={books} />
      <ThemeToggle />
    </div>
  );
};

export default App;