import React from "react";
import { Link } from "react-router-dom";
import locations from "../logements.json";

const Card = () => {
    return (
        <div className="locations">
            {locations.map((location) => {
                const {id,cover,title} = location;
                return(
                    <div className="location" key={id}>
                        <Link to={`/location/${location.id}`}>
                            <img src={cover} className="card-img" alt={title} />
                            <h3>{title}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Card