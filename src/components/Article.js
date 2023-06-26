import React from "react";
import articles from "../data/pg-full-articles.json";
import PropTypes from "prop-types";
import "./article.css";
import { useEffect } from "react";
import { LOCAL_STORE_READ_ESSAYS_KEY } from "../constants";

const Article = ({ handleClick, essayMaskingName = "" }) => {
  useEffect(() => {
    const handleScroll = () => window.scrollTo({ top: window.top, behavior:"smooth" });
    const scrollToTop = document.querySelector(".scroll-to-top");
    scrollToTop && scrollToTop.addEventListener('click', handleScroll);

    return () => scrollToTop.removeEventListener('click', handleScroll);
  }, [essayMaskingName]);

  if (!essayMaskingName) {
    return <></>;
  }

  const article = articles[essayMaskingName];

  let storedEssays = JSON.parse(localStorage.getItem(LOCAL_STORE_READ_ESSAYS_KEY)) || {};
  if(!storedEssays.hasOwnProperty(essayMaskingName)) {
    storedEssays[essayMaskingName] = article ? article.title : "";
    localStorage.setItem(LOCAL_STORE_READ_ESSAYS_KEY, JSON.stringify(storedEssays));
  }
  
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
