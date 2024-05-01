import React, { useState } from 'react'
import "./RandomQuote.css"


export const RandomQuote = () => {
    let quotes = [];

    async function loadQuote() {
        const response = await fetch('https://type.fit/api/quotes')
        quotes = await response.json();

        console.log(quotes)
    }

    const newQuote = () => {
        const value = quotes[Math.floor(Math.random()*quotes.length)]

        setQuote(value);
    }

    const [quote, setQuote] = useState({
        text:"It’s not a bug – it’s an undocumented feature. ",
        author:"(Anonymous)"
    })

    loadQuote();

  return (
    <div className='container'>
        <div className="quote">{quote.text}</div>
        <div>
            <div className="line">
                <div className="bottom">
                    <div className="author">
                        {quote.author.split(',')[0]}
                    </div>
                    <button onClick={newQuote}>Generate Quote</button>
                </div>
            </div>
        </div>    
    
    </div>
  )
}

export default RandomQuote