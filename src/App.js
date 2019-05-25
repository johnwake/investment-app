import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import InputGroup from './components/InputGroup';
import StepSlider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Header>Investment Details</Header>
      <InputGroup
        lable="Investment amount"
        input={{
          onChange: console.log
        }}
      />

      <InputGroup
        lable="Investment length"
        input={{
          onChange: console.log
        }}
      />

        <StepSlider/>
    </div>
  );
}

export default App;
