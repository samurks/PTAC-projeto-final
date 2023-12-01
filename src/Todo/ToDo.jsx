import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ToDo() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("lista")) || [];
  const [video, setVideo] = useState("");
  const [lista, setLista] = useState(listaLocalStorage || []);
  const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
  const [url, setUrl] = useState("");
  const [descricao, setDescricao] = useState("")



  useEffect(
    () => {
      localStorage.setItem("lista", JSON.stringify
        (lista))
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
    setVideo("");
    setUrl("");
    setDescricao("")
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
            placeholder="your video"
          />

          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Url do Video"
          />

          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descricao do video"
          />
          <button>Registrar Video</button>
        </form>
        <iframe
        width="853"
        height="480"
        src={'https://www.youtube.com/embed/' + vid.url.slice(17)} 
        frameborder="0"
        allow="accelerometrer; autoplay; clipboard-write; encrypted-media;">
        </iframe>
      </div>
    </div>

  );
}