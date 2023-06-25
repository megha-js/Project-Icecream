import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/icecreambackground.jpeg";
import "../styles/Home.css";


function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
      <div className="headerContainer" >
        <h1> Scoop Troop Icecream </h1>
        <p> EAT IT BEFORE IT MELTS</p>
        <Link to="/menu">

        <button> ORDER NOW </button>
        </Link>
      </div>
      
    </div>
  );
}

export default Home;
