import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Componentes/Card';
import './Home.css';

export default function Home() {
  const videos = JSON.parse(localStorage.getItem('lista')) || [];

  return (
    <div className="container">
      <div className="header">
        <h1>Your Tube</h1>
        <p>Sua página de vídeos favorita!!!</p>
      </div>

      <div className="links">
        <Link to="/todo">CADASTRAR VIDEO</Link>
        <Link to="/destaque">VIDEOS DESTAQUE</Link>
      </div>

      <div className="videos">
        {videos.map((video, index) => (
          <Card key={index} ytb={video} />
        ))}
      </div>
<br></br>
      <div className="footer">
        <p>&copy; 2023 Your Tube - Todos os direitos reservados</p>
      </div>
    </div>
  );
}
