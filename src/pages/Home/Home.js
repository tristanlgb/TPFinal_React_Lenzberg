import React from "react";
import { Link } from "react-router-dom";
import bulbasaur from "../../bulbasaur.png";
import Header from "../../components/Header/Header";
const Home = () => {
  return (
    <>
      <Header />
     
  
        <div> <Link to="/shop" className="home__cta">
        Comprar
        </Link></div>
        <div className="home">
        <h8> Mi Poketiendita</h8>

        <img src={bulbasaur} alt="bulbasaur" className="home__image" />
      </div>
    </>
  );
};

export default Home;
