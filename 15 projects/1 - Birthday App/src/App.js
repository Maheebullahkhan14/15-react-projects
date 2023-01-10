import logo from './logo.svg';
import './App.css';
import List from './List';
import data from './data'
import { useState } from 'react';


function App() {
  const [people , setpeople] =useState(data)
  return (
    <>
      <div className='App'>
        <h3>{people.length} Birthdays today</h3>
        <List people = {people}/>
        <button className='clear' onClick={() => setpeople([])}>Clear All</button>
      </div>
    </>
  );
}

export default App;
