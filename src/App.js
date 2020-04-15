import React from 'react';

import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
