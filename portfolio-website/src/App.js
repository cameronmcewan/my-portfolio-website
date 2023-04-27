import React from 'react';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <section className="content">
        <h2>About Me</h2>
        <p>Insert your bio here.</p>
      </section>
      <section className="content">
        <h2>Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
