import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ ytb }) {
  const getYouTubeId = (url) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)?([^&\n?#]+)/) ||
                  url.match(/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^&\n?#]+)/);
    return match ? match[1] : '';
  };

  const urlId = getYouTubeId(ytb.url);

  return (
    <div>
      <Link className="corTitulo" to={`/detalhe/${ytb.id}`}>
        <h1>{ytb.video}</h1>
      </Link>
      <iframe
        width="300"
        height="200"
        src={`https://www.youtube.com/embed/${urlId}`}
        title="Vídeo"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
