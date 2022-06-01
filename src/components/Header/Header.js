/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line no-restricted-globals
import Button from '../Button/Button';
import Option from '../option/Option';
import './header.css';

function Header() {
    return (
        <div className="header ">
            <div className="headerContainer">
                <div>
                    <Option
                        country={{
                            def: 'country',
                            bd: 'Bangladesh',
                            india: 'India',
                            en: 'usa',
                        }}
                    />
                    <Option
                        country={{ def: 'LAN', bd: 'Bengali', india: 'Hindi', en: 'English' }}
                    />
                    <Option country={{ def: 'USD', bd: 'Taka', india: 'Rupi', en: 'USD' }} />
                </div>
                <div className="headerBtn">
                    <Button text="login" />
                    <Button text="register" />
                </div>
            </div>
        </div>
    );
}

export default Header;
