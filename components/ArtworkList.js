import React from 'react';
import Artwork from './Artwork';

const ArtworkList = ({ artworks, onArtworkSelect }) => {
  return (
    <div className="artwork-list">
      {artworks.map(artwork => (
        <Artwork
          key={artwork.id}
          artwork={artwork}
          onArtworkSelect={onArtworkSelect}
        />
      ))}
    </div>
  );
};

export default ArtworkList;