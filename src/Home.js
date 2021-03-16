import React, { Component } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";
import {useState} from 'react';

function Home() {
    const groceryy = [];
    const [searchTerm, setSearchTerm] = useState("");
    return(
        <div>
            <Navbar />
        <div className='Home'>
            <div className='Background'>

            </div>
            <input type="text" placeholder="Search Growceries" onChange={event => {setSearchTerm(event.target.value)}} />
                {groceryy.filter((val)=> {
                    if (searchTerm == ""){
                        return val;
                    }
                    else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                }).map((val, key) => {
                    return (
                        <div className="Grocery" key={key} >
                            <p>{val.name} </p>
                        </div>
                    );
                })}
        </div>

        </div>
    )
}


const style = {
  margin: 15
};

export default Home;