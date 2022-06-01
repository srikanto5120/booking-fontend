/* eslint-disable jsx-a11y/label-has-associated-control */
import './checkbox.css';

function Checkbox({ text }) {
    return (
        <div className="checkbox">
            <input type="checkbox" />
            <label>{text}</label>
        </div>
    );
}

export default Checkbox;
