import { useParams } from "react-router-dom";
import React from 'react';
import Card from "../Componentes/Card";

export default function Detalhe() {
    const { id } = useParams();
    const videos = JSON.parse(localStorage.getItem('lista')) || [];
    const buscarPorId = videos.find((video) => video.id == id) || null;

    return (
        <div>
            <p>{buscarPorId.descricao}</p>
            <Card ytb={buscarPorId} />
        </div>
    );
}
