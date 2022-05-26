import React, { useState, useEffect } from "react";
import axios from "axios";
import Slide from '../components/Slide'
import { Link, useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();

  const [games, setGames] = useState([]);

  return (
    <div>
      <div className="navBar">
        <img
          className="logoB"
          src={require("../components/images/logo_black.png")}
          alt="logo"
          onClick={()=>{navigate('/')}}
        />
        <div className="navBarRight">
          <p className="headerButton" onClick={()=>{navigate('/list')}}>Games</p>
          <p>|</p>
          <p className="headerButton" onClick={()=>{navigate('/{user_id}')}}>Account</p>
          <p>|</p>
          <p className="headerButton">Logout</p>
        </div>
      </div>
      <div className="body">
        <div className="bodyLeft"></div> {/*OUTSIDE BORDER DON'T USE THIS DIV*/}
        <div className="bodyCenter">
          <div>
          <img style={{width: '50%'}} src="https://images.adsttc.com/media/images/5ef1/68f8/b357/6529/f500/0347/large_jpg/yc8m6r-A_jpeg.jpg?1592879340" alt="" />
          {games.map(game =>(
            games.box_art
          ))}
          </div>
          <Slide />
        </div>
          <div className="bodyRight"></div> {/*OUTSIDE BORDER DON'T USE THIS DIV*/}
      </div>
    </div>
  )
}

export default List