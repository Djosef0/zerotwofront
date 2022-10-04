import React,{useState , useEffect} from 'react'
import axios from 'axios';
import "./pull.scss";
import { axiosInstance } from '../../config';


export default function  Pull ()  {
const [pull , setPull] = useState([]);



useEffect(() => {
 
    const getPull = async () => {
      try {
        const res = await axiosInstance.get("/clothers/pull", {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
         setPull(res.data);
           } catch (err) {
        console.log(err);
      }
    };
    getPull();
  }, );
  console.log(pull)
  
  return (
    <div className='container-capu'>
         {pull.map((item,key)=>(
        
            <div className='produit' key={key}>
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



