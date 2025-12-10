import React from "react";
import "./BooksSection.css";

function BooksSection() {
  const books = [
    {
      id: 1,
      title: "The Essence of Identity",
      author: "Maria Rodriguez",
      price: "$24.99",
      category: "Cultural Studies",
      color: "#1a365d",
    },
    {
      id: 2,
      title: "Global Perspectives",
      author: "James Chen",
      price: "$22.99",
      category: "Sociology",
      color: "#2d3748",
    },
    {
      id: 3,
      title: "Voices of the Diaspora",
      author: "Amina Diallo",
      price: "$26.99",
      category: "Memoir",
      color: "#4a5568",
    },
    {
      id: 4,
      title: "Cultural Fusion",
      author: "David Park",
      price: "$21.99",
      category: "Art & Culture",
      color: "#718096",
    },
  ];

  return (
    <section className="books-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Top Selling Books</h2>
          <p className="section-subtitle">
            Discover our bestselling books that explore diverse cultures and
            perspectives.
          </p>
        </div>

        <div className="books-grid">
          {books.map((book, index) => (
            <div
              key={book.id}
              className="book-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="book-header">
                <div
                  className="book-color"
                  style={{ backgroundColor: book.color }}
                ></div>
                <div className="book-category">{book.category}</div>
              </div>
              <div className="book-content">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">by {book.author}</p>
                <div className="book-price">{book.price}</div>
              </div>
              <div className="book-actions">
                <button className="btn btn-sm btn-primary">Add to Cart</button>
                <button className="btn btn-sm btn-outline">Preview</button>
              </div>
              <div className="book-hover-effect"></div>
            </div>
          ))}
        </div>

        <div className="section-cta">
          <button className="btn btn-primary">
            View All Books
            <svg
              className="btn-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default BooksSection;
