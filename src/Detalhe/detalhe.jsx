import { useParams,  Link } from "react-router-dom";
import React from 'react';
import Card from "../Componentes/Card";
import './detalhe.css';


export default function Detalhe() {
    const { id } = useParams();
    const videos = JSON.parse(localStorage.getItem('lista')) || [];
    const buscarPorId = videos.find((video) => video.id == id) || null;

    return (
        <div>
            <div>
            <Card ytb={buscarPorId} />
            <p>{buscarPorId.descricao}</p>
            <Link to="/" className="button-link">Voltar para o Home</Link>
           
      </div>
        </div>
        
    );
}
