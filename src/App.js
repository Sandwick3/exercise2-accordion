import React, { useState } from 'react';
import './App.css';

const ExpandableListItem = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`button ${isExpanded ? 'expanded' : ''}`}>
      <div className="title-container">
        <span className="title">{title}</span>
        <button
          className={`plus-button ${isExpanded ? 'expanded' : ''}`}
          onClick={toggleExpansion}
        >
          {isExpanded ? '-' : '+'}
        </button>
      </div>
      {isExpanded && <div className="content">{content}</div>}
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <div className="container">
      <h1 style={{ fontSize: '30px' }}>Questions And Answers About Login</h1>
          <ExpandableListItem
          title="Do I have to allow the use of cookies?"
          content="Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."
        />
         <ExpandableListItem
          title="How do I change my My Page password?"
          content="Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse."
        />
         <ExpandableListItem
          title="What is BankID?"
          content="Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial."
        />
         <ExpandableListItem
          title="Whose birth number can I use?"
          content="Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify."
        />
        <ExpandableListItem
          title="When do I recieve a password ordered by letter?"
          content="Sir pwede na mo graduate?"
        />
      </div>
    </div>
  );
}

export default App;