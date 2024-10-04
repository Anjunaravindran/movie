// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  const handleButtonClick = (id) => {
    // Navigate to the item detail page with the specific ID
    navigate(`/item/${id}`);
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <button onClick={() => handleButtonClick(item.id)}>
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
