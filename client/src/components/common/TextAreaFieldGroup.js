import React from 'react';
import classname from 'classnames';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({
    name,
    placehorder,
    value,
    info,
    error,
    onChange
}) => {
    return (
        <div className="form-group">
            <textarea
                className={classname('form-control form-control-lg', {
                    'is-invalid': error
                })}
                placeholder={placehorder}
                name={name}
                value={value}
                onChange={onChange}
            />
            {info && <small className="form-text text-muted">{info}</small>}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
};

TextAreaFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placehorder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

TextAreaFieldGroup.defaultProps = {
    type: 'text'
};

export default TextAreaFieldGroup;