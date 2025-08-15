import React, { useState } from 'react';
import Hero from './Hero';
import CreateTicket from './CreateTicket';

function SupportPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeAnswer, setActiveAnswer] = useState(null);

    // Function to handle clicking a link
    const handleTopicClick = (question, answer) => {
        setSearchTerm(question); // Fills the search box
        setActiveAnswer(answer);  // Shows the answer
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls up to show the result
    };

    return ( 
       <>
        <Hero 
            searchTerm={searchTerm} 
            onSearch={setSearchTerm} 
            activeAnswer={activeAnswer}
            setActiveAnswer={setActiveAnswer}
        />
        <CreateTicket onTopicClick={handleTopicClick} />
       </>
     );
}

export default SupportPage;