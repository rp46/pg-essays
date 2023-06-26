import React from "react";
import PropTypes from "prop-types";
import "./articles.css";
import { LOCAL_STORE_READ_ESSAYS_KEY } from "../constants";

const Articles = ({ data, handleClick }) => {
  let storedEssays =
    JSON.parse(localStorage.getItem(LOCAL_STORE_READ_ESSAYS_KEY)) || {};

  const readEssays = {};
  Object.entries(storedEssays).forEach(
    (essay) => (readEssays[essay[0]] = data[essay[0]])
  );

  const renderEssays = (data, storedEssays) => {
    return (
      <ul>
        {data &&
          Object.entries(data).map(([key, value]) => {
            if (storedEssays.hasOwnProperty(key)) {
              return <React.Fragment key={key}></React.Fragment>;
            }

            return (
              <li key={key} onClick={() => handleClick(key)}>
                {value.title}
              </li>
            );
          })}
      </ul>
    );
  };

  return (
    <>
      <h1>Paul Graham Essays</h1>
      {renderEssays(data, storedEssays)}
      <h2>Re-read Essays</h2>
      {renderEssays(readEssays, {})}
    </>
  );
};

Articles.propTypes = {
  handleClick: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default Articles;
