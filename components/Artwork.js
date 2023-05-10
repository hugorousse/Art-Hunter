import React from 'react';

const Artwork = ({ title, artist, image }) => {
  return (
    <div className="artwork">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Par {artist}</p>
    </div>
  );
};

export default Artwork;
