import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function ToDo() {
  const listaLocalStorage = JSON.parse(localStorage.getItem('lista')) || [];
  const [video, setVideo] = useState('');
  const [lista, setLista] = useState(listaLocalStorage || []);
  const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
  const [url, setUrl] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    localStorage.setItem('lista', JSON.stringify(lista));
  }, [lista]);

  const salvar = (e) => {
    e.preventDefault();
    setLista([
      ...lista,
      {
        video: video,
        id: id,
        url: url,
        descricao: descricao,
      },
    ]);
    setId(id + 1);
    setVideo('');
    setUrl('');
    setDescricao('');
  };

  return (
    <div className="container">
      <div className="links">
        <Link to="/destaque">Ir para Destaque</Link>
        <Link to="/">Voltar para o Home</Link>
      </div>
      <div className="form-container">
        <h1>Your Tube</h1>
        <form onSubmit={salvar}>
          <label>Nome do vídeo:</label>
          <input
            type="text"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
            placeholder="Nome do vídeo"
          />
          <label>URL do vídeo:</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="URL do vídeo"
          />
          <label>Descrição do vídeo:</label>
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição do vídeo"
          />
          <button>Registrar Vídeo</button>
        </form>
      </div>
    </div>
  );
}
