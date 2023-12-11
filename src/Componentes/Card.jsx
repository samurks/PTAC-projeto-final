import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ ytb }) {

    const urlId = ytb.url.slice(17)

    return (
        <div><Link to = {`detalhe/${ytb.id}`}>
            <h1>{ytb.video}</h1>
            </Link>
            <iframe
                width="300"
                height="200"
                src={`https://www.youtube.com/embed/${urlId}`}
                title="Vídeo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>

        </div>
    );

};