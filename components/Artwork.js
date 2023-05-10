import React from 'react';

const Artwork = ({ artwork, onArtworkSelect }) => {
  const handleArtworkClick = () => {
    onArtworkSelect(artwork);
  };

  return (
    <div className="artwork" onClick={handleArtworkClick}>
      <img src={artwork.image} alt={artwork.title} />
      <h3>{artwork.title}</h3>
      <p>Par {artwork.artist}</p>
    </div>
  );
};

export default Artwork;