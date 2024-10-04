import React, { useState } from 'react';

// Sample JSON data (replace with your actual data)
const jsonData = {
  data: [
    {
      id: 1,
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
        
      ]
    },
    {
      id: 2,
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg"
        
      ]
    }
  ]
};

const Extra = ({ selectedId }) => {
  // Find the data based on the selected ID
  const foundItem = jsonData.data.find(item => item.id === selectedId);

  // If no item found, return null or a fallback UI
  if (!foundItem) {
    return <div>No images found</div>;
  }

  const { images } = foundItem;

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div key={index} className="carousel-item">
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

// Example usage
const App = () => {
  const [selectedId, setSelectedId] = useState(1); // Change to the desired ID

  return (
    <div>
      <h1>Image Carousel</h1>
      <Extra selectedId={selectedId} />
      {/* You can add buttons or other controls to change the selectedId */}
    </div>
  );
};
export default Extra;