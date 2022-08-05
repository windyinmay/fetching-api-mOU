import React from 'react';
import NavBar from "../../components/NavBar";
import Axios from '../../services/Axios'

export default function Main(){
    return(
        <div>
            <NavBar/>
            <Axios/>
        </div>
    )
}