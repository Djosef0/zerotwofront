import React,{useState , useEffect} from 'react'
import axios from 'axios';
import "./casquettes.scss";
import { Link } from "react-router-dom";
import { axiosInstance } from '../../config';

export default function  Casquettes ()  {
const [casquettes , setCasquettes] = useState([]);



useEffect(() => {
 
    const getCasquettes = async () => {
      try {
        const res = await axiosInstance.get("/clothers/casquettes", {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
         setCasquettes(res.data);
           } catch (err) {
        console.log(err);
      }
    };
    getCasquettes();
  }, );
  console.log(casquettes)
  
  return (
  
    <div className='container-capu' style={{"border":"none" ,"marginTop":"170px"}} >
         {casquettes.map((item,key)=>(
        
            <div className='produit' style={{"border":"none"}} key={key}>
            <img src={item.img} alt="" />
            <p className='desc'>{item.desc}</p>
            <p style={{"fontSize":"10px"}}><b>Taille Disponible {item.size}</b></p>
            <p style={{"fontSize":"10px"}}><b>Couleur Disponible {item.color}</b></p>
            <p><b>{item.prix}</b></p>
            
            <p></p>
            </div>

            
         ))} 
      



    </div>
  
 
  )
}



