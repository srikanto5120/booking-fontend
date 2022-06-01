/* eslint-disable jsx-a11y/label-has-associated-control */
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../input/Input';
import Option from '../option/Option';
import './form.css';

function From({ text }) {
    return (
        <form action="" className="form">
            <div className="formContainer">
                <div>
                    <h5 className="formTitle">FIND CHEAP {text}</h5>
                    <div className="checkboxContainer">
                        <Checkbox text="One Way" />
                        <Checkbox text="Round Trip" />
                        <Checkbox text="Multiple Cities" />
                    </div>
                </div>
            </div>
            <div className="inputContainer">
                <Input type="text" text="From" placeholder="Dhaka(BN)" />
                <Input type="text" text="To" placeholder="London(USA)" />
            </div>
            <div className="inputContainer">
                <Input type="date" text="Check in" placeholder="MM/DD/YY" />
                <Input type="date" text="Check out" placeholder="MM/DD/YY" />
            </div>
            <div className="optionContainer">
                <div className="optionItem">
                    <label className="label" htmlFor="">
                        {' '}
                        Adult
                    </label>
                    <br />
                    <Option country={{ def: '0', india: 1, en: '2' }} />
                </div>
                <div className="optionItem">
                    <label className="label" htmlFor="">
                        {' '}
                        Seniors
                    </label>
                    <br />
                    <Option country={{ def: '0', india: 1, en: '2' }} />
                </div>
                <div className="optionItem">
                    <label className="label" htmlFor="">
                        {' '}
                        Child
                    </label>
                    <br />
                    <Option country={{ def: '0', india: 1, en: '2' }} />
                </div>
                <div className="optionItem">
                    <label className="label" htmlFor="">
                        {' '}
                        Class
                    </label>
                    <br />
                    <select className="searchOption" name="" id="">
                        <option value="eco">Eco</option>
                        <option value="coach">Coach</option>
                        <option value="bus">Bus</option>
                        <option value="1st">!st</option>
                    </select>
                </div>
                <br />
            </div>
            <div className="submitBtn">
                <button type="button" className="button">
                    SEARCH NOW
                    <FontAwesomeIcon icon={faArrowRight} className="submitIcon" />
                </button>
            </div>
        </form>
    );
}

export default From;
