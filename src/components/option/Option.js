import './option.css';

function Option({ country }) {
    return (
        <select className={country.bd ? 'select' : 'searchOption'} id="cars">
            {country.bd ? (
                <>
                    <option value={country.bd}>{country.bd}</option>
                    <option value={country.india}>{country.india}</option>
                    <option value={country.en}>{country.en}</option>
                </>
            ) : (
                <>
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                    <option value="1">5</option>
                    <option value="1">6</option>
                    <option value="1">7</option>
                </>
            )}
        </select>
    );
}

export default Option;
