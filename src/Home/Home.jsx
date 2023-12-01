import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
   
const videos = JSON.parse(localStorage.getItem("lista")) || [];

    return (
        <div>
            <h1>your tube</h1>
            <p>sua pagina de videos favorita!!!</p>
            <br></br>
            
            <Link to="/todo">Ir para proxima pagina</Link>
        </div>
    );
}