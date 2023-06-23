import React from "react";
import PropTypes from "prop-types";
import { getPaulGrahamSiteUrl } from "../../utils";
import './link.css';

const Link = ({ title, essayMaskingName }) => {

  return (
    <a href={getPaulGrahamSiteUrl(essayMaskingName)} title={title}>
      {title}
    </a>
  );
};

Link.propTypes = {
  title: PropTypes.string.isRequired,
  essayMaskingName: PropTypes.string.isRequired,
};

export default Link;
