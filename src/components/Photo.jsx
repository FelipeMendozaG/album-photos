import React from "react";
import Logo from "../assets/social.png";
import OndasSonoras from "../assets/ondas-sonoras.png";
import { Link } from 'react-router-dom';

const Photo=(props)=>{
    const {image} = props;
    const ChangeSpotifay = ()=>{
        const cancionId = image.token_music;
        window.open(`https://open.spotify.com/track/${cancionId}?si=6618b659491b4ae0&nd=1`);
    }
    return (
    <div className="item">
        <div className="polaroid">
          <img src={image.url}/>
          <div className="caption">
            <img className="img-spotify" onClick={()=>ChangeSpotifay() } src={Logo} alt="Imagen spotify" />
            <div className="content-replay">
                <img className="img-controls" src={OndasSonoras} alt="ONDAS SONORAS" />
            </div>
          </div>
        </div>
    </div>
    );
}
export default Photo;