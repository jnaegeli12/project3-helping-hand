import React from "react";
import ResultsCard from "../components/Results";
import Header from "../components/Header";

function Results() {
    return (
    <div className="container container-fluid">
        <Header headerName={"All Service Organizations"} />
        <ResultsCard />
    </div>
    )
}

export default Results;