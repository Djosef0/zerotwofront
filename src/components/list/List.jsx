import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
  
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "../listItem/listItem.scss";
import "./list.scss";
import { capuche } from "../../capuche";

export default function List({ list ,index}) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  const [isHovered, setIsHovered] = useState(false);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">{capuche.desc}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {capuche.map((item, i) => (
            <>
              <div
              className="listItem"
              style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img src="https://scontent.cdninstagram.com/v/t1.15752-9/308990841_5625981880788626_5974311789534348257_n.jpg?stp=dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=5a057b&_nc_ohc=bK9BV-VHWuoAX9r_eci&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AVJ7fLd1CMswmRlWZN3wh8dIEiBHBHEhldt82WauHJul3Q&oe=6363D0C7" alt="" />
              {isHovered && (
                <>
                  <div className="itemInfo">
                    
                    <div className="desc"><b style={{"fontSize":"20px"}}>veste baseball</b></div>
                    <div className="desc">taille disponible <b>s,m,xl,xxl</b></div>
                    <div className="desc">couleur disponible <b>tous les couleur</b></div>
                    <div className="desc">prix <b>75DT</b></div>
                    
                  </div>
                </>
              )}
            </div>
              <div
              className="listItem"
              style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img src="https://scontent.cdninstagram.com/v/t1.15752-9/309157315_2257773707733049_678834520464215163_n.jpg?stp=dst-jpg_p600x600&_nc_cat=111&ccb=1-7&_nc_sid=5a057b&_nc_ohc=2-OrBqADeEYAX8XYZJx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AVLsCoDsy08Ut_DkM_tGdAoAZUFfdF0yOfsvS1wa0Qnl4w&oe=63640D2E" alt="" />
              {isHovered && (
                <>
                  <div className="itemInfo">
                    
                    <div className="desc"><b style={{"fontSize":"20px"}}>veste</b></div>
                    <div className="desc">taille disponible <b>s,m,xl,xxl</b></div>
                    <div className="desc">couleur disponible <b>tous les couleur</b></div>
                    <div className="desc">prix <b>55DT</b></div>
                    
                  </div>
                </>
              )}
            </div>
              <div
              className="listItem"
              style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img src="https://scontent.cdninstagram.com/v/t1.15752-9/308836767_459242436244102_8233126593364202400_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5a057b&_nc_ohc=Xkf807VreXgAX-frbSu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AVIq5upvJyiQMCv-rutzpDr0PlRK-tnNcnajyYfpQ8qWww&oe=6362747E" alt="" />
              {isHovered && (
                <>
                  <div className="itemInfo">
                    
                    <div className="desc"><b style={{"fontSize":"20px"}}>pantalon jogging</b></div>
                    <div className="desc">taille disponible <b>s,m,xl,xxl</b></div>
                    <div className="desc">couleur disponible <b>tous les couleur</b></div>
                    <div className="desc">prix <b>45DT</b></div>
                    
                  </div>
                </>
              )}
            </div>
              <div
              className="listItem"
              style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img src="https://scontent.cdninstagram.com/v/t1.15752-9/309200223_499298285047114_9130319268226409750_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5a057b&_nc_ohc=SrUS8ZhYgyIAX88ZID7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AVIhe56eK18rm2mg1072nZI6pGyKcYy5ESvIoCsFKhyFgA&oe=636440D6" alt="" />
              {isHovered && (
                <>
                  <div className="itemInfo">
                    
                    <div className="desc"><b style={{"fontSize":"20px"}}>capuche zero two</b></div>
                    <div className="desc">taille disponible <b>s,m,xl,xxl</b></div>
                    <div className="desc">couleur disponible <b>tous les couleur</b></div>
                    <div className="desc">prix <b>48DT</b></div>
                    
                  </div>
                </>
              )}
            </div>
              <div
              className="listItem"
              style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img src="https://scontent.cdninstagram.com/v/t1.15752-9/308961498_479369957444177_7466347809485055919_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5a057b&_nc_ohc=m3cg2YkZhuUAX8ZYm4v&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AVKVrrOs0rQqQkJpTAIVjkgWN0Shj_NunCDEKatQZhXFfQ&oe=6362BFBA" alt="" />
              {isHovered && (
                <>
                  <div className="itemInfo">
                    
                    <div className="desc"><b style={{"fontSize":"20px"}}>Pantalon jogging</b></div>
                    <div className="desc">taille disponible <b>s,m,xl,xxl</b></div>
                    <div className="desc">couleur disponible <b>tous les couleur</b></div>
                    <div className="desc">prix <b>45DT</b></div>
                    
                  </div>
                </>
              )}
            </div>
              <div
              className="listItem"
              style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img src="https://scontent.cdninstagram.com/v/t1.15752-9/307937879_428628622589222_6411776042668701432_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5a057b&_nc_ohc=6bmtkDyO_A4AX9wD2Fd&_nc_oc=AQkvw29hZohalQP_bqdhKynA428ARkYqn3qgYTGEhEnC7VZm0b0JJ888XH7PjePylri8r_Zzuau0cSsqHlEMlisK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AVLAwcpfHJVGylmVgjH2HbJ1FAZje4IBdy-cmFmqJQkZnA&oe=6364C4B6" alt="" />
              {isHovered && (
                <>
                  <div className="itemInfo">
                    
                    <div className="desc"><b style={{"fontSize":"20px"}}>Capuche zero two</b></div>
                    <div className="desc">taille disponible <b>s,m,xl,xxl</b></div>
                    <div className="desc">couleur disponible <b>tous les couleur</b></div>
                    <div className="desc">prix <b>48DT</b></div>
                    
                  </div>
                </>
              )}
            </div>
              <div
              className="listItem"
              style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img src="https://scontent.cdninstagram.com/v/t1.15752-9/308298056_659502422044959_693616211424020477_n.jpg?stp=dst-jpg_p480x480&_nc_cat=105&ccb=1-7&_nc_sid=5a057b&_nc_ohc=lc3xlcAVJ3gAX-ITZR3&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AVKo7sjvcOiEBPvZfr3h-rIO1hyN-tzG8GNCLqERwheOig&oe=636287B3" alt="" />
              {isHovered && (
                <>
                  <div className="itemInfo">
                    
                    <div className="desc"><b style={{"fontSize":"20px"}}>Veste baseball</b></div>
                    <div className="desc">taille disponible <b>s,m,xl,xxl</b></div>
                    <div className="desc">couleur disponible <b>tous les couleur</b></div>
                    <div className="desc">prix <b>75DT</b></div>
                    
                  </div>
                </>
              )}
            </div>
   
            </>
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
