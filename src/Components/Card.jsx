import React from "react";
import { Link } from "react-router-dom";
import locations from "../logements.json";

const Card = () => {
    return (
        <div className="locations">
            {locations.map((location) => {
                const {id,cover,title} = location;
                return(
                    // Destructuration de l'objet location pour extraire les propriétés id, cover et title
                    <div className="place" key={id}>
                          {/* Utilisation de Link pour la navigation sans rechargement de la page */}
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