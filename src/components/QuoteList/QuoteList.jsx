import { useEffect, useState } from "react";
import QuoteCard from "../QuoteCard/QuoteCard";

const QuoteList = (props) => {
  const [quoteList, setQuoteList] = useState([]);

  console.log(quoteList);

  useEffect(() => {
    fetch(`https://api.quotable.io/quotes?tags=${props.seletedTag}`, {
      method: "GET",
      headers: { "X-Api-Key": "YOUR_API_KEY" },
      contentType: "application/json",
    })
      .then((response) => response.json())
      .then((data) => setQuoteList(data.results))
      .catch((error) => console.log("Error Fetching Data", error));
  }, [props.seletedTag]);

  return (
    <div className="container">
      {quoteList &&
        quoteList?.map((quote, index) => (
          <QuoteCard key={index} quote={quote.content} author={quote.author} />
        ))}
    </div>
  );
};
export default QuoteList;
