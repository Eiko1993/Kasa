import React,{useState} from 'react';
import arrowUp from "../Assets/arrowUp.png"
import arrowDown from "../Assets/arrowDown.png"


function Collapse({title,content}){

    //fermé par default
    const [contentVisible, setContentVisible] = useState(false);

    const displayContent = () => {
        setContentVisible(!contentVisible) //inverse la valeur de contentVisible
    }

    return (
        <div className='collapse'>
            <div className='collapse_title' onClick={displayContent}>
                <span>{title}</span>
                <div className='arrowValue'>
                    {contentVisible ? (
                        <img src={arrowUp} alt="Flèche haute"/>  
                    ) : (
                        <img src={arrowDown} alt="Flèche bas"/>  
                    )}
                </div>
            </div>
            {contentVisible && (
                <div className='collapse_content'>
                    <ul>{content}</ul>
                </div>
            )}
        </div>
    )


}

export default Collapse