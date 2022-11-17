import * as React from 'react';
import axios from "axios";

// INTERFACES
import { Details,QuoteProps } from '../../utils/interfaces';

// STYLES
import './styles.css';

const QuoteBox = ({quoteCategory}: QuoteProps) => {

  const [detail,setDetail] = React.useState<Details>()

  React.useEffect(() => {
    getDetails(quoteCategory)
  },[])

  const getDetails = async (category:string) => {
    const {data} = await axios.get(`https://qodapi.azurewebsites.net/api/Quote/${category}`)
    setDetail(data)
  }

  return (
    <div className='quoteBox'>
        <div style={{
                backgroundImage: `url("${detail?.background}")`
            }} className="quoteContainer">
            <h4 className='quoteCategory'>
                <span style={{padding:'7px',borderRadius:'10px',backgroundColor:'#000'}}>{quoteCategory}</span>
            </h4>
            <h2 className='quoteText'>{detail?.quoteString}</h2>
        </div>
        <div className='tagAuthorBox'>
            <span className='tags'>
                {detail?.tags.map((tag,index) => {
                    return (
                        index === detail?.tags.length - 1 ? (<p key={tag?.name}>{tag?.name}.</p>) : <p key={tag?.name}>{tag?.name},</p>)
                })}
            </span>
            <h3 className='authorText'>- {detail?.author}</h3>
        </div>
    </div>
  );
}

export default QuoteBox;