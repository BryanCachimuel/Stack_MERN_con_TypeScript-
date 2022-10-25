import React from "react";
import { Video } from "../Interface/VideoInterface";
import ReactPlayer from 'react-player'

// se importa la interfaz para poder acceder a los atributos del documento
interface Props {
  video: Video;
}

const VideoItem = ({ video }: Props) => {
  return (
    <div className="col-md-4">
      <div className="card card-body">
        <div className="d-flex justify-content-between">
          <h2>{video.titulo}</h2>
          <span className="text-danger">x</span>
        </div>
        <p>{video.descripcion}</p>
        <ReactPlayer url={video.url} width='100%' height='100%' /> 
      </div>
    </div>
  );
};

export default VideoItem;
