/* eslint-disable jsx-a11y/label-has-associated-control */
import './input.css';

function Input({ text, placeholder, type }) {
    return (
        <div>
            <label className="label">{text}</label>
            <br />
            <input className="inpt" placeholder={placeholder} type={type} />
        </div>
    );
}

export default Input;
