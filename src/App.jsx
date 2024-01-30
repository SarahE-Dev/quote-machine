import React from 'react'
import { useState } from 'react'
import quotes from './assets/quotes'
import './App.css'

const getRandomQuote=()=>{
  return quotes[Math.floor(Math.random() * quotes.length)]
}


function App() {
  
  const [quote, setQuote] = useState(getRandomQuote())

  const changeQuote = () => {
    setQuote(getRandomQuote())
  }
  return (
    <div className='main'>
    <div id="quote-box">
      <div className="quote-content">
        <h2 id="text">"{quote.quote}"</h2>
        <h4 id="author"> - {quote.author}</h4>
      </div>
      <div>
      <button onClick={changeQuote} id="new-quote">New Quote</button>
      <a target='_blank' href="twitter.com/intent/tweet" id="tweet-quote">Tweet</a>
      </div>
    </div>
    
    </div>
  )
}

export default App
