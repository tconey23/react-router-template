import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <header>
        <h1>React Application</h1>
      </header>
        <Routes>
          <Route path='/'>
            <></>
          </Route>
        </Routes>
    </main>
  );
}

export default App;
