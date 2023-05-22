import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Video } from "../Interface/VideoInterface";
import * as videoServicios from '../Services/VideoServicios'
import { toast } from 'react-toastify'

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
  id: string;
}

const CrearVideo = () => {

  const estadoInicial = {
    titulo: "",
    descripcion: "",
    url: "",
  }

  const [video, setVideo] = useState<Video>(estadoInicial)

  const navegar = useNavigate()
  const {id} = useParams<{id?: string}>()

  const handleInputChange = (e: InputChange) =>{
    setVideo({ ...video, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!id){
      await videoServicios.crearVideo(video)
      toast.success('Nuevo Video Agregado')
      setVideo(estadoInicial)
    }else{
      await videoServicios.actualizarVideo(id, video)
    }

    navegar('/')
  }

  const obtenerVideo = async (id: string) =>{
    const videoId = await videoServicios.obtenerVideoId(id)
    const { titulo, descripcion, url } = videoId.data
    setVideo({titulo, descripcion, url})
  }

  useEffect(() => {
    if(id) obtenerVideo(id)
  },[id])

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
                {
                  id ? (
                  <button className="btn btn-success">Actualizar Video</button>
                  ):(
                  <button className="btn btn-primary">Crear Video</button>
                )}
                <Link className="btn btn-danger" to={"/"}>Cancelar</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearVideo;
