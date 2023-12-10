import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const videos = JSON.parse(localStorage.getItem('lista')) || [];

  return (
    <div>
      <h1>Your Tube</h1>
      <p>Sua página de vídeos favorita!!!</p>
      <br />
      <Link to="/todo">Ir para próxima página</Link>
    </div>
  );
}
