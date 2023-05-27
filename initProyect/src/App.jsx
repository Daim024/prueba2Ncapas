import React from "react";
import { useState } from 'react';
import Login from '../src/components/Login.jsx'
import NavBar from "./components/navbar.jsx";
import MyCarousel from "./components/carousel.jsx";
import Cards from "./components/card.jsx";


function App() {
    return ( 
        <div>
           
            <NavBar />
            <MyCarousel/>
            <Cards/>
            <Login />
        </div>

   


    )  

}
export default App;