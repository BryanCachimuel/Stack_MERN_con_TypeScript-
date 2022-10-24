import React from "react";
import {Link} from 'react-router-dom'

const CrearVideo = () => {
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
                  autoFocus
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="url"
                  placeholder="https://www.youtube.com/"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="descripcion"
                  rows={3}
                  className="form-control mb-3"
                  placeholder="Escribe una descripción"
                ></textarea>
              </div>
              <div className="form-group">
                <button className="btn btn-primary">Crear Video</button>
                <Link className="btn btn-danger" to={'/'}>Cancelar</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearVideo;
