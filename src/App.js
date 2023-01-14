import React, {useState} from 'react';
import Main from './components/Main';
import InputShortener from './components/InputShortener';
import LinkOutput from './components/LinkOutput';
import Statistics from './components/Statistics';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <Main />
      <InputShortener setInputValue={setInputValue} />
      <LinkOutput inputValue={inputValue} />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;
