import React, { useState } from 'react';
import ColorBox from '../components/ColorBox';
import ButtonControls from '../components/ButtonControls';
import Title from '../components/Title';
import Instructions from '../components/Instructions';
import './App.css';

const App = () => {
  const [color, setColor] = useState('grey')

  const setStyle = (color) => {
    setColor(color);
  }

  return (
    <div>
      <Title />
      <ColorBox color={color} />
      <ButtonControls setStyle={setStyle} />
      <Instructions />
    </div>
  );
}

export default App;
