import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import { veste } from "../../veste";
export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [clothe, setClothe] = useState({});



  return (
    <Link to={{ pathname: "/watch", clothe: clothe }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={veste?.img} alt="" />
        {isHovered && (
          <>
            <div className="itemInfo">
              
              <div className="desc"><b style={{"fontSize":"20px"}}>{veste.desc}</b></div>
              <div className="desc">taille disponible <b>{veste.taille}</b></div>
              <div className="desc">couleur disponible <b>{veste.couleur}</b></div>
              <div className="desc">prix <b>{veste.prix}</b></div>
              <p>appuyez ici!</p>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
