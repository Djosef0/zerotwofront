import { ArrowBackOutlined , Facebook ,Instagram , Smartphone } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";


import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const clothe = location.clothe;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <div className="propre">
      <img src={clothe.img}  alt=""/>
     
      <div className="carac">
        <i>
     <h2>{clothe.title}</h2>
     <h4>{clothe.desc}</h4>
     <h2>Couleur Disponible :{clothe.color}</h2> 
     <h2>Taille Disponible :{clothe.size}</h2> 
     <h2 ><i>prix :{clothe.prix}</i></h2> 
     <p><i><b>Livraison sur toute la tunisie</b></i></p>
     </i>
     <p>contacter :</p>
    <a href='https://www.facebook.com/02TUNISIA'><Facebook /></a>
    <a href='https://www.instagram.com/zero_two.tn/'><Instagram /></a><br/>
    <Smartphone />+216 58869851 , +216 58229079
      </div>

      </div>
    </div>
  );
}
