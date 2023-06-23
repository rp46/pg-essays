import React from "react";
import PropTypes from 'prop-types';
import Link from "./Link";
import './ul.css';

const UnorderedList = ({data}) => {
    if(!data) {
        return <></>;
    }
    return (
        <div className="list">
            <ul>
                {Object.entries(data).map(([key, value]) => {
                    return (
                        <li key={key}>
                            <Link title={value} essayMaskingName={key} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

UnorderedList.propTypes = {
    data: PropTypes.object.isRequired,
};

export default UnorderedList;