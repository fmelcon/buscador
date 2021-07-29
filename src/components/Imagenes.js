import React from "react";

const Imagenes = ({ imagen }) => {
  const { largeImageURL, likes, previewURL, tags, views } = imagen;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <a href={largeImageURL} target="_blank" rel="noopener noreferrer">
          <img src={previewURL} alt={tags} className="card-img-top" />
        </a>
      </div>
      <div className="card-body">
        <span className="card-text">
          {likes} <i className="fas fa-thumbs-up"></i>
        </span>
        <span className="card-text">
          {views} <i className="far fa-eye"></i>
        </span>
      </div>
    </div>
  );
};

export default Imagenes;
