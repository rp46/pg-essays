import React from "react";
import articles from "../data/pg-full-articles.json";
import PropTypes from "prop-types";
import "./article.css";
import { useEffect } from "react";

const Article = ({ handleClick, essayMaskingName = "" }) => {
  useEffect(() => {
    const scrollToTop = document.querySelector(".scroll-to-top");
    scrollToTop && scrollToTop.addEventListener('click', () => window.scrollTo({ top: window.top, behavior:"smooth" }));

    return () => scrollToTop.removeEventListener('click');
  }, [essayMaskingName]);

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
      <div className="scroll-to-top">&#94;</div>
    </article>
  );
};

Article.propTypes = {
  handleClick: PropTypes.func.isRequired,
  essayMaskingName: PropTypes.string.isRequired,
};

export default Article;
