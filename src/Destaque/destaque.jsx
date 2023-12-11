import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Componentes/Card';


export default function Destaque() {
  const videos = JSON.parse(localStorage.getItem('lista')) || [];

  return (
    <div>
      <h1>Your Tube</h1>
      <p>Sua página de vídeos favorita!!!</p>
      <br />
      <Link to="/todo">Ir para próxima página</Link>
      {videos.slice(-4).map((video, index) => (                           
          <Card key={index} ytb={video} />      
         ))}
    </div>
    
  );
}
