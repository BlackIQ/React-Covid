import React from "react";
import Countries from "./components/countries";
import Navbar from "./components/navbar";
import './App.css';

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="m-3">
                            <h3>Coronavirus disease</h3>
                            <hr />
                            <p>
                                <b>Get vaccinated. Vaccines are widely available.</b>
                                <br />
                                COVID-19 affects different people in different ways. Infected people have had a wide range of symptoms reported – from mild symptoms to severe illness.
                            </p>
                            <p>
                                For more information, check out <a href="https://www.who.int/health-topics/coronavirus">WHO article about COVID-19</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="m-3">
                            <h3>Project</h3>
                            <hr />
                            <p>
                                This project is a React project to practice with APIs in React.
                            </p>
                            <p>
                                <b>Was it good?</b>
                                <br />
                                I worked with many frameworks and honestly working with APIs in React is the most simple way. Exactly opposite of Flutter. Working with APIs in Flutter is the hardest times you experience.
                            </p>
                            <p>
                                <b>Source</b>
                                <br />
                                This project is an open-source project in Github. in the navbar, right side of it, there is the repo link.
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <Countries/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
