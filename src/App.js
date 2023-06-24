import "./styles.css";
import React, { useState } from "react";
import data from "./data/pg-full-articles.json";
import Article from "./components/Article";
import Articles from "./components/Articles";

const App = () => {
  const [essay, setEssay] = useState(null);
  const handleClick = (essayMaskingName) => {
    setEssay(essayMaskingName);
  };

  return (
    <div className="container">
      <main>
        {essay && <Article handleClick={handleClick} essayMaskingName={essay} />}
        {!essay && <Articles data={data} handleClick={handleClick} />}
      </main>
    </div>
  );
};

export default App;
