import React,{useState} from 'react';
import "../Style/collapse.scss";
import arrowUp from "../Assets/arrowUp.png"
import arrowDown from "../Assets/arrowDown.png"


function Collapse({title,content}){

    //fermé par default
    const [contentVisible, setContentVisible] = useState(false);

    const displayContent = () => {
        setContentVisible(!contentVisible) //inverse la valeur de contentVisible
    }

    const collapseContent = (contentVisible ? "visible" : "hidden") + "collapse";
    const collapseArrow = (contentVisible ? arrowUp : arrowDown);

    return (
        <div className='collapse'>
            <div className='collapse_title' onClick={displayContent}>
                <span>{title}</span>
                <div className='arrowValue'>
                    <img src={collapseArrow} alt=""/>
                </div>
            </div>
            <div className={collapseContent}>
                <ul>{content}</ul>
            </div>
        </div>
    )


}

export default Collapse