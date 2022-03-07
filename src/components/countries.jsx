import {useEffect, useState} from "react";
import Country from "./country";

const Countries = () => {
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        fetch("https://data.covidapi.com/countries").then(response => {
            return response.json();
        }).then((response) => {
            setCountries(response['body']);
        });
    }, []);

    const loading = <div className="m-3">
        <hr />
        <h4>Loading data . . .</h4>
    </div>

    return (
        countries ? countries.map(country => <Country Key={country.id} country={country}/>) : loading
    );
}

export default Countries;