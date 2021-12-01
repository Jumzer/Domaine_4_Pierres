import React from "react";
import home1 from '../../assets/home1.jpg';
import './Home.css';
import Carousell from '../../components/Carousel'


const Home = () => {

  return (
    <div>
      <img src={home1} alt="" />
      <h2>DOMAINE DES 4 PIERRES <br /> 11600 ARAGON <br /> EDOUARD FORTIN</h2>
      <p>Pour déguster, commander ou pour toute demande d’information, <strong>
  contactez nous </strong></p>
      <Carousell/>
    </div>
  )
}
export default Home;

