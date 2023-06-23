import "./styles.css";
import React from "react";
import essays from "./data/pg-essays.json";
import UnorderedList from "./components/articles/UnorderedList";

const App = () => {
  return (
    <div className="container">
      <main>
        <h1>Paul Graham Essays</h1>
        <UnorderedList data={essays} />
      </main>
    </div>
  );
};

export default App;
