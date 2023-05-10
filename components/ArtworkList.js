import React from 'react';
import Artwork from './Artwork';
import artworks from '../data/artworks';

const ArtworkList = () => {
  return (
    <div className="artwork-list">
      {artworks.map((artwork) => (
        <Artwork
          key={artwork.id}
          title={artwork.title}
          artist={artwork.artist}
          image={artwork.image}
        />
      ))}
    </div>
  );
};

export default ArtworkList;