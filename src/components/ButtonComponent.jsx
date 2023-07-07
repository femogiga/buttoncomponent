
import PropTypes from 'prop-types';
import '../../src/App.css'


const ButtonComponent = ({ variant, text, disabled, startIcon, endIcon, disableShadow, size, color }) => {






    return (
        <div className='buttonContainer'>
            <button disabled={disabled} className={`${variant} ${size} ${color} ${disableShadow ? 'disableShadow' : ""}`} >

                <span className="material-symbols-outlined">
                    {startIcon}
                </span>{text}<span className="material-symbols-outlined">
                    {endIcon}
                </span>
            </button>
        </div>
    )
}

ButtonComponent.propTypes = {
    variant: PropTypes.string,
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    startIcon: PropTypes.node,
    endIcon: PropTypes.node,
    disableShadow: PropTypes.bool,
    size: PropTypes.string,
    color: PropTypes.string
};


export default ButtonComponent
