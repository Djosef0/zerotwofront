import React,{useState , useEffect} from 'react'
import axios from 'axios';
import "./pantalon.scss";


export default function Panta ()  {
const [panta , setPanta] = useState([]);



useEffect(() => {
 
    const getPanta = async () => {
      try {
        const res = await axios.get("/clothers/pantalon", {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
         setPanta(res.data);
           } catch (err) {
        console.log(err);
      }
    };
    getPanta();
  }, );
  console.log(panta)
  
  return (
    <div className='container-capu'>
         {panta.map((item,key)=>(
        
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



