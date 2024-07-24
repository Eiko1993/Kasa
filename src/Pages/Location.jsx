import { useState } from "react";
import { useSearchParams } from 'react-router-dom'

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Error from "./Error";
import Collapse from "../Components/Collapse";
import Carousel from "../Components/Carousel";

import logements from "../logements.json";


const stars = [1,2,3,4,5];

function Location(){

    //récuparation ID de l'Url
    const [searchParams] = useSearchParams();
    const [idLocation] = useState(searchParams.get('_id'));

    //récupération de l'ID dans le json
    const locations = logements.find(element => element.id === idLocation);

    if(!locations) return(<Error />)

        //récupération des équipements
        const equipments = locations.equipments.map((element, index) => (
            <li className='description' key={"equip-"+index.toString()}>{element}</li>
          ))

          return(
            <div className="location">
                <Header />
                <Carousel pictures={locations.pictures} />

                <div className="fiche-location">
                    <div className="div-description">
                        <h1>{locations.title}</h1>
                        <h4>{locations.location}</h4>
                        <div className="div-tags">
                            {locations.tags.map((element,index) => {
                                return(<p className="tags" key={"tags-"+index}>{element}</p>)
                            })}
                        </div>
                    </div>
                    <div className="host">
                        <div className="div-stars">
                            <p>{locations.host.name}</p>
                            <img src={locations.host.picture} alt={locations.title} />
                        </div>
                        <div className="stars">
                            {
                                stars.map(element => {
                                    const starsNumber = parseInt(locations.rating)
                                    return(<span key={"star-"+element} className={element <= starsNumber ? 'span1' :'span2'}>★</span>)
                                })
                            }

                        </div>
                    </div>
                </div>
                <div className="collapseLocation">
                    <Collapse title="Description" content={locations.description} />
                    <Collapse title="Equipements" content={equipments} />
                </div>
                <Footer />
            </div>
          
                        )
    }
export default Location;
