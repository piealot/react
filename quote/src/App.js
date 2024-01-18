import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function App() {
  const quotes = [
    [
      "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
      "Plato",
    ],
    [
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
      "Amelia Earhart",
    ],
    [
      "Our lives begin to end the day we become silent about things that matter.",
      "Martin Luther King Jr.",
    ],
    [
      "The only person you are destined to become is the person you decide to be.",
      "Ralph Waldo Emerson",
    ],
    ["The best revenge is massive success.", "Frank Sinatra"],
  ];
  const [quote, setQuote] = useState(quotes[0]);

  return (
    <div className="App">
      <div className="quote-box" id="quote-box">
        <Quote quote={quote[0]} />
        <Author author={quote[1]} />
        <div class="button-row">
          <SocialButtons quote={quote} />
          <NewQuoteButton current={quote} quotes={quotes} setQuote={setQuote} />
        </div>
      </div>
    </div>
  );
}

function Quote({ quote }) {
  return (
    <div className="text" id="text">
      <p>
        <FontAwesomeIcon icon={faQuoteLeft} /> {quote}
      </p>
    </div>
  );
}

function Author({ author }) {
  return (
    <div className="text" id="author">
      - {author}
    </div>
  );
}

function NewQuoteButton({ current, quotes, setQuote }) {
  let newquote = [];
  let rand = 0;
  do {
    rand = Math.round(Math.random() * 2);
  } while (quotes[rand][0] == current[0]);

  return (
    <button
      onClick={() => setQuote([...quotes[rand]])}
      type="button"
      id="new-quote"
      class="btn btn-dark"
    >
      New quote
    </button>
  );
}

function SocialButtons({ quote }) {
  return (
    <a target="_blank" href={"https://twitter.com/intent/tweet?text=" + quote}>
      <button type="button" class="btn btn-info">
        <FontAwesomeIcon icon={faTwitter} />
      </button>
    </a>
  );
}
export default App;
