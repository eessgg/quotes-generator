import { useState } from 'react';
import './App.css';
import { TwitterShareButton } from "react-share";
import { FaTwitter } from 'react-icons/fa';


function App() {
  const [results, setResults] = useState([]);
  // const [isLoading, setLoading] = useState(false);

  const getData = () => {
    fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=10")
      .then(response => response.json())
      .then(data => {
        console.log((data.quotes))
        setResults([data.quotes]);
        //   setLoading(true)
      })
      .catch(err => {
        console.error(err);
      });
  }

  const listItems = results.map((link, index) => (
    <>
      <div className="quotes" key={index}>
        <p className="quote-text">{link[index].text}</p>
        <p className="quote-author">{link[index].author}</p>
        <TwitterShareButton
          url={"https://goquotes-api.herokuapp.com/"}
          title={'"' + link[index].text + '" by ' + link[index].author}
          >
          <button className="btn btn-share"> Share it <FaTwitter /></button>
        </TwitterShareButton>
      </div>
    </>
    ));

  return (
    <div className="App">
      <h1>Quotes Generator</h1>
      <button type="button" className="btn btn-quote" onClick={getData}>New Quote</button>
      {listItems}
   
    </div>
  );
}

export default App;
