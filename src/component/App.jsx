import React, { Component } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Cards from "./Cards";
import Footer from "./Footer";
import "../style.css";

export default class App extends Component{

    render()
    {
        return(
            <>
                
                <About/>
                <Cards/>
                <Footer/>
            </> 
        )
    }
}



           
            