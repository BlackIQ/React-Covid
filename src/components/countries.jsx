import {useEffect, useState} from "react";
import Country from "./country";
import Loading from "./loading";

const Countries = () => {
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        fetch("https://data.covidapi.com/countries").then(response => {
            return response.json();
        }).then((response) => {
            setCountries(response['body']);
        });
    }, []);

    return (countries ? countries.map(country => <Country Key={country.id} country={country}/>) : <Loading />);
}

export default Countries;