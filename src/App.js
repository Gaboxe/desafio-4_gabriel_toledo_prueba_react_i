import { useState, useEffect } from "react";

import MiApi from './Components/MiApi/MiApi';
import Searcher from './Components/Searcher.jsx/Searcher';

import './App.css';

function App() {
  const [info, setInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searcherCheck, setSearcherCheck] = useState(false);
  const [searcherCheck_2, setSearcherCheck_2] = useState(false);

  const cardsFilter = ({ name, id }) => {
    let nameLow = name.toLowerCase();
    let ID = id.toString().toUpperCase();
    let searche_term = searchTerm.toLowerCase();

    if (searchTerm === '') {
      return {};
    } else if (nameLow.includes(searche_term) && searcherCheck === false) {
      return {};
    } else if ((nameLow.includes(searche_term) || ID.includes(searche_term)) && searcherCheck === true) {
      return {};
    };

  };

  return (
    <div className="App">
      <header className=" block max-w-full h-24 bg-black">
        <h1 className="text-2xl p-6 text-white">bienvenido al Filtro de <span className="text-3xl ">Ryck and Morty</span></h1>
      </header>
      <div className='flex flex-col items-center justify-center py-9 px-4 sm:px-6 lg:px-8'>
        <Searcher searcherState={searchTerm} setSearcherState={setSearchTerm} searcherCheckState={searcherCheck} setSearcherCheckState={setSearcherCheck} setSearcherCheckState_2={setSearcherCheck_2} />
      </div>
      <MiApi info={info} setInfo={setInfo} filterFunction={cardsFilter} checkOrganize={searcherCheck_2} />

      <footer className="block h-24 bg-black">

      </footer>
    </div>
  );
}

export default App;
