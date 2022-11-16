import React from "react";

import QuoteBox from "../../components/QuoteBox/QuoteBox";

const HomeScreen = () => {
    return (
        <div>
            <h1>SKYBOUND</h1>
            <QuoteBox 
                quoteCategory={'Inspire'} 
                quoteText="Meaning is something you build into your life. You build it out of your own past, out of your affections and loyalties, out of the experience of humankind as it is passed on to you... You are the only one who can put them together into that unique pattern that will be your life."
                background="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"
                tags={['tags','tgga','new','trending']}
                author="John Gardner"
            />
        </div>
    )
}

export default HomeScreen;