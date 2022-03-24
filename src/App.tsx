import React from 'react';
import ElectronSVG from './electronjs-icon.svg'
import './App.css';

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ElectronSVG} className="App-logo" alt="logo" />
        <p>
          Electron, Typescript and React.
        </p>      
        <a
          className="App-link"
          href="https://github.com/caiulucas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by caiulucas
        </a>
      </header>
    </div>
  );
}
