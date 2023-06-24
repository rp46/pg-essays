import React from "react";
import articles from "../data/pg-full-articles.json";
import PropTypes from "prop-types";
import "./article.css";

const Article = ({ handleClick, essayMaskingName = "" }) => {
  if (!essayMaskingName) {
    return <></>;
  }
  const article = articles[essayMaskingName];
  return (
    <article className="essay">
      <div className="back-arrow" onClick={() => handleClick("")}>
        &larr;&nbsp;Go&nbsp;Back
      </div>
      <div dangerouslySetInnerHTML={{ __html: article.html }} />
    </article>
  );
};

Article.propTypes = {
  handleClick: PropTypes.func.isRequired,
  essayMaskingName: PropTypes.string.isRequired,
};

export default Article;
