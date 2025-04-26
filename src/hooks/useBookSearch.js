import { useState, useEffect } from 'react';

const useBookSearch = (query) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      if (!query.trim()) return;
      
      setLoading(true);
      try {
        // Первый запрос - поиск книг
        const searchResponse = await fetch(
          `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
        );
        const searchData = await searchResponse.json();
        
        // Второй запрос - получение деталей для каждой книги
        const booksWithDetails = await Promise.all(
          searchData.docs.slice(0, 12).map(async (book) => {
            try {
              const detailsResponse = await fetch(
                `https://openlibrary.org${book.key}.json`
              );
              const detailsData = await detailsResponse.json();
              return {
                ...book,
                description: detailsData.description || 
                             detailsData.notes ||
                             detailsData.first_sentence ||
                             null
              };
            } catch (e) {
              return book; // Возвращаем оригинальную книгу если ошибка
            }
          })
        );
        
        setBooks(booksWithDetails);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchBooks, 500);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  return { books, loading, error };
};

export default useBookSearch;