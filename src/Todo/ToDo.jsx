import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

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
    navigate('/');
  };

  const remover = (id) => {
    const novaLista = lista.filter((vid) => vid.id !== id);
    setLista(novaLista);
  };

  return (
    <div>
      <Link to="/">Voltar para o Home</Link>
      <h1>Your Tube</h1>
      <div>
        <form onSubmit={salvar}>
          <input
            type="text"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
            placeholder="Nome do video"
          />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="URL do vídeo"
          />
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
