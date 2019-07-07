import React from 'react';
import Header from './components/Header';
import Left from './components/Left';
import './App.css';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Left/>
    <Footer/>
    </div>
  );
}

export default App;
