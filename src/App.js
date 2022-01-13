import React from "react";
import './reset.css';
import './App.css';
import Navigation from "./components/Navigation";
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <section>
        <Carousel />
      </section>
    </div>
  );
}

export default App;
