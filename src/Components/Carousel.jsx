import React, { useState } from 'react'
import arrowLeft from "../Assets/arrowLeft.png"
import arrowRight from "../Assets/arrowRight.png"


function Carousel({pictures}) {
    
    const [index, setIndex] = useState(0);
    const allPictures = pictures.length-1;

    if(index < 0) setIndex(allPictures);
    if(index > allPictures) setIndex(0);

    return(
        <div className='carousel'>
            <div className='pic'>
                <img src={pictures[index]} className='image' key={"car-"+index} alt={"photo "+index} />
            </div>
            {allPictures > 0 && (
                <>
                    <button onClick={() => setIndex(index-1)}>{index}
                        <img src={arrowLeft} className='arrowleft' alt="flèche gauche" />
                    </button>
                    <button onClick={() => setIndex(index+1)}>{index}
                        <img src={arrowRight} className='arrowright' alt="flèche droite" />
                    </button>
                    <div className='compteur'>
                        <p className='compteur-img'>
                            {index+1}/{allPictures+1}
                        </p>
                    </div>
                </>
            )}
        </div>
    )
}

export default Carousel