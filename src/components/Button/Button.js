import './button.css';

function Button({ text }) {
    return (
        <div>
            <button className="btn" type="button">
                {text}
            </button>
        </div>
    );
}

export default Button;
