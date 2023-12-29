import React from "react";
import "./QuoteCard.css";

const QuoteCard = ({ quote, author }) => {
  return (
    <div className="card">
      <div className="quote">{quote}</div>
      <div className="author">{author}</div>
    </div>
  );
};

export default QuoteCard;
