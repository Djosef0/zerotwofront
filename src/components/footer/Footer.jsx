import React from 'react';
import "./footer.scss";
import zertow from "../img/002.jpg";
import sachet from "../img/sachet.png";
import { ArrowBackOutlined , Facebook ,Instagram , Smartphone } from "@material-ui/icons";

const Footer = () => {
  return (
    <div className='footer'>
    <div className='propos'>
        <img src={zertow} alt=""/>
    </div>
    <div className='propos'>
        <h1>Plus d'information</h1>
        <ul>
            <li>Livraison sur toute la Tunisie</li>
            <Instagram /><a href='https://www.instagram.com/zero_two.tn/'><li>instagram</li></a>
            <Facebook /><a href='https://www.facebook.com/02TUNISIA'><li>facebook</li></a>
           <Smartphone /> <li>+(216)58869851 , +(216)58229079</li>
        </ul>
    </div>
    <div className='propos'>
    <span><img src={sachet} alt=''/><div><h1>Catégorie</h1>
    <ul>
            <li>Capuche</li>
            <li>Colmontant</li>
            <li>Pantalon</li>
            <li>Casquettes</li>
            <li>Bucket hat</li>
            <li>Mug</li>
            <li>Thermos</li>
        </ul>
        </div>
    </span>
       
    </div>

    </div>
  )
}

export default Footer