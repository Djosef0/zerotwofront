import React,{useState , useEffect} from 'react'
import "./capuche.scss";
import { Link } from "react-router-dom";
import { axiosInstance } from '../../config';
import { capuche } from "../../capuche.js";
export default function  Capuche ()  {



  
  return (
  
    <div className='container-capu' style={{"border":"none" ,"marginTop":"170px"}} >
         {capuche.map((item,key)=>(
        
            <div className='produit' style={{"border":"none"}} key={key}>
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



