import {useState} from "react";
import Country from "./country";

const Countries = () => {
    const [contries, setCountries] = useState(null);

    return (
        contries.map(country => (
            <Country country={country} />
        ))
    );
}

export default Countries;