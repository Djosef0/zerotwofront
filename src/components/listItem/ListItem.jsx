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

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [clothe, setClothe] = useState({});

  useEffect(() => {
    const getClothe = async () => {
      try {
        const res = await axios.get("/clothers/find/" + item, {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setClothe(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getClothe();
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", clothe: clothe }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={clothe?.imgSm} alt="" />
        {isHovered && (
          <>
            <div className="itemInfo">
              
              <div className="desc"><b style={{"fontSize":"20px"}}>{clothe.type}</b></div>
              <div className="desc">taille disponible <b>{clothe.size}</b></div>
              <div className="desc">couleur disponible <b>{clothe.color}</b></div>
              <div className="desc">prix <b>{clothe.prix}</b></div>
              <p>appuyez ici!</p>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
