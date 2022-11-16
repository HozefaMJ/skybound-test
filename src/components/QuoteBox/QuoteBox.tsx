import * as React from 'react';

import './styles.css';

export interface QuoteProps {
    quoteCategory: string;
    quoteText: string;
    author: string;
    tags: (string)[];
    background: string
}

const QuoteBox = ({quoteCategory,quoteText,author,tags,background}: QuoteProps) => {
  return (
    <div className='quoteBox'>
        <div style={{
                backgroundImage: `url("${background}")`
            }} className="quoteContainer">
            <h4 className='quoteCategory'>
                <span style={{padding:'7px',borderRadius:'10px',backgroundColor:'#000'}}>{quoteCategory}</span>
            </h4>
            <h2 className='quoteText'>{quoteText}</h2>
        </div>
        <div className='tagAuthorBox'>
            <span className='tags'>
                {tags.map((tag,index) => {
                    return (
                        index === tags.length - 1 ? (<p key={tag}>{tag}.</p>) : <p key={tag}>{tag},</p>)
                })}
            </span>
            <h3 className='authorText'>- {author}</h3>
        </div>
    </div>
  );
}

export default QuoteBox;