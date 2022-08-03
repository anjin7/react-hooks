import React from "react";
import { useState } from 'react';

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the section 2"
  },
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  };
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

function App() {  
  const currentItem = useTabs(0, content);
  const changeItem = useTabs()
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>
        {currentItem.content}
      </div>
    </div>
  );
}

export default App;
