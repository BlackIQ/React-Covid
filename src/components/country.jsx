import {FaHospital, FaPlus, FaSkull} from "react-icons/fa";

const Country = (country) => {
    return (
        <div className="col-md-3">
            <div className="m-3 card border">
                <h4 className="card-header">{ country.country.country_name }</h4>
                <div className="card-body">
                    <span>
                        <span className="text-primary">
                            <FaHospital /> <b>Total Cases</b> { country.country.total_cases }
                        </span>
                        <br />
                        <span className="text-success">
                            <FaPlus /> <b>Recovered</b> { country.country.total_recovered }
                        </span>
                        <br />
                        <span className="text-danger">
                            <FaSkull /> <b>Died</b> { country.country.total_deaths }
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Country;