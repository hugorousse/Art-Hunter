import React from 'react';

const ArtworkDetail = ({ artwork }) => {
  return (
    <div className="artwork-detail">
      <h2>{artwork.title}</h2>
      <p>Par {artwork.artist}</p>
      <img src={artwork.image} alt={artwork.title} />
      <p>{artwork.description}</p>
      <p>Dimensions : {artwork.dimensions}</p>
    </div>
  );
};

export default ArtworkDetail;