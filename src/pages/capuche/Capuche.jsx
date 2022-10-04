import React,{useState , useEffect} from 'react'
import axios from 'axios';
import "./capuche.scss";
import { Link } from "react-router-dom";
import { axiosInstance } from '../../config';

export default function  Capuche ()  {
const [capuche , setCapuche] = useState([]);

const Url = "https://projet.adaptable.app/api/"

useEffect(() => {
 
    const getCapuche = async () => {
      try {
        const res = await axios.get(Url+"/clothers/capuche", {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
         setCapuche(res.data);
           } catch (err) {
        console.log(err);
      }
    };
    getCapuche();
  }, );
  console.log(capuche)
  
  return (
  
    <div className='container-capu' style={{"border":"none" ,"marginTop":"170px"}} >
         {capuche.map((item,key)=>(
        
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



