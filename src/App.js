import React from 'react';
import Container from './components/container/Container'
import background from './media/summer-sun-warmth-field-9568.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={background} alt="By Skitterphoto from Pexels" />
      <Container />
    </div>
  );
}

export default App;
