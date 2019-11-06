import React from "react";
import "./style.css";

function ImageCard(props) {
    return (
        
            <div className="img-thumbnail" onClick={() => props.onClick(props.id, props.clicked)}>
                <img alt={props.name} src={props.image} />
            </div>
    
    );
}

export default ImageCard;