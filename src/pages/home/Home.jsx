import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";
import panta from "../../components/img/panta1.png"
import capucheR from "../../components/img/test2.png";
import veste from "../../components/img/vesteN.png";
import pullbej from "../../components/img/pullbej1.png"
import accesoire from "../../components/img/acc.png";
import { Link , useHistory} from "react-router-dom";
import { axiosInstance } from "../../config";
import { liste } from "../../list";

const Home = ({ type }) => {
  const history = useHistory();
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
function capu(e){
  history.push("/capuche")
  
}
function vest(e){
  history.push("/veste")
  
}
function pull(e){
  history.push("/pull")
  
}
function pantalon(e){
  history.push("/pantalon")
  
}



  return (
    
    <div className="home">
      <Navbar />
      <Featured type={type}  />
     <div className="collection">
     <h1 className="collection-title">Nos Collection</h1>
     <div className="collection-container">
      <div className="collection-container-item"><img src={capucheR} alt="" /><div className="overlay"></div><div className="commentaire"><h4>Capuche</h4><hr></hr><p>Il y'a tous les types des capuches chez zero two</p><button onClick={capu}>voir plus</button></div></div>
      <div className="collection-container-item"><img src={veste} alt=""/><div className="overlay"></div><div className="commentaire"><h4>Veste</h4><hr></hr><p>Il y'a tous les types des vestes chez zero two</p><button onClick={vest}>voir plus</button></div></div>
      <div className="collection-container-item"><img src={pullbej} alt=""/><div className="overlay"></div><div className="commentaire"><h4>Pull</h4><hr></hr><p>Il y'a tous les types des pulles chez zero two</p><button onClick={pull}>voir plus</button></div></div>
      <div className="collection-container-item"><img src={panta} alt=""/><div className="overlay"></div><div className="commentaire"><h4>Pantalon</h4><hr></hr><p>Il y'a tous les types des Pantalon chez zero two</p><button onClick={pantalon}>voir plus</button></div></div>
      <div className="collection-container-item"><img src={accesoire} alt=""/><div className="overlay"></div><div className="commentaire"><h4>Accesoire</h4><hr></hr><div className="acc"><ul>
       <Link to="/casquettes" style={{"textDecoration":"none" , "color":"white" , "fontSize":"14px"}}><li>Casquette</li></Link> 
       <Link to="buckethat" style={{"textDecoration":"none" , "color":"white" , "fontSize":"14px"}}><li>Bucket Hat</li></Link> 
       <Link to="/mug" style={{"textDecoration":"none" , "color":"white" , "fontSize":"14px"}}><li>Mug</li></Link> 
        <Link to="/thermos" style={{"textDecoration":"none" , "color":"white" , "fontSize":"14px"}}><li>Thermos</li></Link>
       <Link to="/bonnet" style={{"textDecoration":"none" , "color":"white" , "fontSize":"14px"}}><li>Bonnet</li></Link> 
        </ul></div></div></div>

     </div>

     </div>
     <div className="collection">
     <h1 className="collection-title1">Les Styles du moment</h1>
     {liste.map((list) => (
        <List list={list} />))}

     </div>

     <Footer />
     
    </div>
  );
};

export default Home;
