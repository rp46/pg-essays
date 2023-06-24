import "./styles.css";
import React from "react";
import essays from "./data/pg-essays.json";
import UnorderedList from "./components/articles/UnorderedList";
import { PG_WEB_URL } from "./constants";

const App = () => {
  return (
    <div className="container">
      <main>
        <h1><a href={PG_WEB_URL}>Paul Graham Essays</a></h1>
        <UnorderedList data={essays} />
      </main>
    </div>
  );
};

export default App;
