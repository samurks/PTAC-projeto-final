import { useParams, Link } from "react-router-dom";
import React from 'react';
import Card from "../Componentes/Card";
import './detalhe.css';

export default function Detalhe() {
    const { id } = useParams();
    const videos = JSON.parse(localStorage.getItem('lista')) || [];
    const buscarPorId = videos.find((video) => video.id == id) || null;

    return (
        <div className="container">
            <div className="video-container">
                <Card ytb={buscarPorId} />
                <p className="description">{buscarPorId.descricao}</p>
                <Link to="/" className="link-back">Voltar para o Home</Link>
            </div>
        </div>
    );
}
