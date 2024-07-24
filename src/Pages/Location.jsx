import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Error from "./Error";
import Collapse from "../Components/Collapse";
import Carousel from "../Components/Carousel";

import logements from "../logements.json";

const stars = [1,2,3,4,5];

function Location() {
    // récupération de l'ID de l'URL
    const { id } = useParams();
    const [location, setLocation] = useState(null);

    useEffect(() => {
        // récupération de l'ID dans le JSON
        const foundLocation = logements.find(element => element.id === id);
        setLocation(foundLocation);
    }, [id]);

    if (!location) return <Error />

    // récupération des équipements
    const equipments = location.equipments.map((element, index) => (
        <li className='description' key={"equip-" + index.toString()}>{element}</li>
    ));

    return (
<div className="location">
    <Header />
    <Carousel pictures={location.pictures} />
    <div className="fiche-location">
        <div className="div-description">
            <h1>{location.title}</h1>
            <h4>{location.location}</h4>
            <div className="div-stars">
                <p>{location.host.name}</p>
                <img src={location.host.picture} className='host' alt={location.title} />
            </div>
            <div className="div-tags">
                {location.tags.map((element, index) => {
                return (
                <p className="tags" key={"tags-" + index}>{element}</p>
                    );
                })}
                <div className="stars">
                    {stars.map((element) => {
                    const starsNumber = parseInt(location.rating);
                    return (<span key={"star-" + element} className={element <= starsNumber ? "filled" : "empty"}>★</span>);
                    })}
                </div>
            </div>
    </div>


</div>

    <div className="collapseLocation">
        <Collapse title="Description" content={location.description} />
        <Collapse title="Equipements" content={equipments} />
    </div>
        <Footer />
</div>
    )
}

export default Location;