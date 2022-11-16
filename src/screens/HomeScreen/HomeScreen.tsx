import * as React from 'react';
import QuoteBox from '../../components/QuoteBox/QuoteBox';

export interface IAppProps {
}

const HomeScreen = (props: IAppProps) => {

  React.useEffect(() => {
    console.log('Err Solved')
  })

  return (
    <div>
      <h1>Skybound Assesment</h1>
      <QuoteBox/>
    </div>
  );
}


export default HomeScreen;