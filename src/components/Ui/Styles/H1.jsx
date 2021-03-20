import React from 'react';
import PropTypes from 'prop-types';

const H1 = ({ children, fontSize, textAlign, textTransform, marginBottom }) => {
    return (
        <h1 style={{ fontSize, textAlign, textTransform, marginBottom }}>
            {children}
        </h1>
    );
};

H1.propTypes = {
    children: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired,
    textAlign: PropTypes.string.isRequired,
    textTransform: PropTypes.string.isRequired,
    marginBottom: PropTypes.string.isRequired,
};

export default H1;
