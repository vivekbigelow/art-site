import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    let params = useParams();
    return <div>Details for {params.pieceId}</div>;
};

export default Details;
