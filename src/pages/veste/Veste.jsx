import React,{useState , useEffect} from 'react'
import axios from 'axios';
import "./veste.scss";


export default function  Veste ()  {
const [col , setCol] = useState([]);



useEffect(() => {
 
    const getColmontant = async () => {
      try {
        const res = await axios.get("/clothers/veste", {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
         setCol(res.data);
           } catch (err) {
        console.log(err);
      }
    };
    getColmontant();
  }, );
  console.log(col)
  
  return (
    <div className='container-capu'>
         {col.map((item,key)=>(
        
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



