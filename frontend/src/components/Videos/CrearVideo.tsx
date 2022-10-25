import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Video } from "../Interface/VideoInterface";
import * as videoServicios from '../Services/VideoServicios'
import { toast } from 'react-toastify'

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const CrearVideo = () => {

  const navegar = useNavigate()

  const estadoInicial = {
    titulo: "",
    descripcion: "",
    url: "",
  }

  const [video, setVideo] = useState<Video>(estadoInicial)

  const handleInputChange = (e: InputChange) =>{
    setVideo({ ...video, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await videoServicios.crearVideo(video)
    toast.success('Nuevo Video Agregado')
    setVideo(estadoInicial)
    navegar('/')
  }

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>Nuevo Video</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="titulo"
                  placeholder="Titulo del Video"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.titulo}
                  autoFocus
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="url"
                  placeholder="https://www.youtube.com/"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.url}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="descripcion"
                  rows={3}
                  className="form-control mb-3"
                  placeholder="Escribe una descripción"
                  onChange={handleInputChange}
                  value={video.descripcion}
                ></textarea>
              </div>
              <div className="form-group">
                <button className="btn btn-primary">Crear Video</button>
                <Link className="btn btn-danger" to={"/"}>
                  Cancelar
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearVideo;
