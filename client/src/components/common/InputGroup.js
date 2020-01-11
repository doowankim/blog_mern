import React from 'react';
import classname from 'classnames';
import PropTypes from 'prop-types';

const InputGroup = ({
    name,
    placehorder,
    value,
    icon,
    error,
    type,
    onChange
}) => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <i className={icon} />
                </span>
            </div>
            <input
                className={classname('form-control form-control-lg', {
                    'is-invalid': error
                })}
                placeholder={placehorder}
                name={name}
                value={value}
                onChange={onChange}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

InputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placehorder: PropTypes.string,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};


//defaultProps: 기본설정(text)으로 정함
InputGroup.defaultProps = {
    type: 'text'
};

export default InputGroup;