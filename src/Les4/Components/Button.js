import PropTypes from 'prop-types';

const Button = ({ children, color = 'primary' }) => {
    return (
        <button className={`btn btn-${color}`}>{ children }</button>
    )
};

Button.propTypes = {
    color: PropTypes.oneOf(['primary', 'danger', 'secondary'])
};

export default Button;
