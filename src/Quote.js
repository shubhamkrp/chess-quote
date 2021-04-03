import React,{useState} from 'react';
import {quotes} from './chess_quotes';
import { FaQuoteRight } from 'react-icons/fa';

const Quote=()=>{
	const [index,setIndex]=useState(0);
	const checkNumber = (number) => {
    if (number > quotes.length - 1) {
      return 0;
    }
    if (number < 0) {
      return quotes.length - 1;
    }
    return number;
  };
	const randomQuote = () => {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
	return(
		<article className='quote'>
      <div className='image-container'>
      <span className='quote-icon'><FaQuoteRight /></span>
      <p className='info'>{quotes[index][0]}</p>
      <h4 className='author'>{quotes[index][1]}</h4>
      </div>
      <button className='random-btn' onClick={randomQuote}>
        Generate quote
      </button>
    </article>
	);
}

export default Quote;