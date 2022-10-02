import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";
import full from "../img/back.png";
import mob from "../img/test6.png";
export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/clothers/capuche`)
        
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  console.log(content);
  return (
    <div className="featured">
      <img src={full} alt=""  className="pc"/>
      <img src={mob} alt="" className="mob" />
      <div className="info">
       
        </div>
  
       
      </div>
     
    
  );
}
