import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Video } from "../Interface/VideoInterface";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const CrearVideo = () => {
  const [video, setVideo] = useState<Video>({
    titulo: "",
    descripcion: "",
    url: "",
  });

  const handleInputChange = (e: InputChange) =>{
    setVideo({...video, [e.target.value]: e.target.value})
  }

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>Nuevo Video</h3>
            <form action="">
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="titulo"
                  placeholder="Titulo del Video"
                  className="form-control"
                  onChange={handleInputChange}
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
                />
              </div>
              <div className="form-group">
                <textarea
                  name="descripcion"
                  rows={3}
                  className="form-control mb-3"
                  placeholder="Escribe una descripción"
                  onChange={handleInputChange}
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
