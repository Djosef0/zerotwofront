import React,{useState , useEffect} from 'react'
import axios from 'axios';
import "./pantalon.scss";
import { pantalon } from '../../pantalon';
import { Link } from 'react-router-dom';

export default function Panta ()  {
const [panta , setPanta] = useState([]);




  
  return (
    <div className='container-capu'>
         {pantalon.map((item,key)=>(
        
            <div className='produit' key={key}>
                <img src={item.img} alt="" />
            <p className='desc'>{item.desc}</p>
            <p style={{"fontSize":"10px"}}><b>Taille Disponible {item.taille}</b></p>
            <p style={{"fontSize":"10px"}}><b>Couleur Disponible {item.couleur}</b></p>
            <p><b>{item.prix}</b></p>
            <a href="https://www.facebook.com/search/top?q=zero_two.tn" style={{"fontSize":"8px"}}>Cliquez pour acheter</a>
            
            <p></p>
            </div>

            
         ))} 
      



    </div>
  )
}



