import { useEffect } from 'react';
import './App.css';

import Content from "./components/templates/Content";
import Footer from "./components/templates/Footer";
import Header from "./components/templates/Header";

function App() {

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
