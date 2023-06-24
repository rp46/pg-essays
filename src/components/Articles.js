import React from "react";
import PropTypes from 'prop-types';
import './articles.css';

const Articles = ({ data, handleClick }) => {
    return (
      <>
        <h1>Paul Graham Essays</h1>
        <div className="list">
          <ul>
            {data && Object.entries(data).map(([key, value]) => {
              return (
                <li key={key} onClick={() => handleClick(key)}>
                  {value.title}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }

Articles.propTypes = {
    handleClick: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
};

export default Articles;