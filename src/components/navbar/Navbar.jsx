import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import zeroTwo from "../img/002.jpg";
import menu from "../img/menu.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [aff , setAff] = useState(false)
 

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

const affiche=()=>{
  if(aff===true){
    setAff(false)
  }else(
    setAff(true)
  )
}
  

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
         <img src={zeroTwo} alt=""/>
          <Link to="/" className="link">
            <span>Page Home</span>
          </Link>
          <Link to="/capuche" className="link">
            <span className="navbarmainLinks">Capuche</span>
          </Link>
          <Link to="/veste" className="link">
            <span className="navbarmainLinks">Veste</span>
          </Link>
          <Link to="/pull" className="link">
            <span className="navbarmainLinks">Pull</span>
          </Link>
          <Link to="/pantalon" className="link">
            <span className="navbarmainLinks">Pantalon</span>
          </Link>
          <ul>
    <li>
      <Link to="#" style={{"color":"white" , "textDecoration":"none"}}>Accesoire</Link>
      <ul style={{"backgroundColor":"white", "borderRadius":"12px"}} >
        <li><Link to="/casquettes" style={{"color":"black" , "textDecoration":"none"}}>Casquettes</Link></li>
        <li><Link to="/buckethat" style={{"color":"black" , "textDecoration":"none"}}>Bucket Hat</Link></li>
        <li><Link to="/mug" style={{"color":"black" , "textDecoration":"none"}}>Mug</Link></li>
        <li><Link to="/thermos" style={{"color":"black" , "textDecoration":"none"}}>Thermos</Link></li>
        <li><Link to="/bonnet" style={{"color":"black" , "textDecoration":"none"}}>Bonnet</Link></li>
      </ul>
    </li>
  </ul>
      
        </div>
        <div className="right">
         
        <img className="icon" src={menu} alt=""
        onClick={affiche}
        />
        { aff && (
          <>
         <div className="menu">
        <h1>Zero Two</h1>
            <ul className="menu-item">
              <Link to="/" style={{"color":"black" , "textDecoration":"none"}}><li>Page Home</li></Link>
              <Link to="/capuche" style={{"color":"black" , "textDecoration":"none"}}><li>Capuche</li></Link>
              <Link to="/veste" style={{"color":"black" , "textDecoration":"none"}}><li>Veste</li></Link>
              <Link to="/pantalon" style={{"color":"black" , "textDecoration":"none"}}><li>Pantalon</li></Link>
              <Link to="/casquettes" style={{"color":"black" , "textDecoration":"none"}}><li>Casquettes</li></Link>
              <Link to="/buckethat" style={{"color":"black" , "textDecoration":"none"}}><li>Bucket hat</li></Link>
              <Link to="/Mug" style={{"color":"black" , "textDecoration":"none"}}><li>Mug</li></Link>
              <Link to="/thermos" style={{"color":"black" , "textDecoration":"none"}}><li>Thermos</li></Link>
              <Link to="/bonnet" style={{"color":"black" , "textDecoration":"none"}}><li>Bonnet</li></Link>
              
            </ul>
          </div>
          </>
        )}
        </div>
      

      </div>
    </div>
  );
};

export default Navbar;
