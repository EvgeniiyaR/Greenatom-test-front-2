import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './App.css';
import api from '../../utils/api';
import ResultField from '../result-field/ResultField';

function App() {
  const [searchList, setSearchList] = useState([]);
  const [searchLinks, setSearchLinks] = useState([]);
  const [search, setSearch] = useState('');
  const [amount, setAmount] = useState('10');

  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLInputElement;
    if (target.name === 'search') {
      setSearch(target.value);
    } else if (target.name === 'amount') {
      setAmount(target.value);
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api.getSearch(search, Number(amount))
    .then((res) => {
      setSearchList(res[1]);
      setSearchLinks(res[3]);
    })
  }

  const commonList: string[][] = [];
  searchList.map((item, index) => {
    return commonList.push([item, searchLinks[index]]);
  });

  return (
    <main className="main">
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="search">Поиск</label>
        <input className="form__input" type="search" id="search" value={search || ''} name="search" onChange={handleChange} placeholder="Введите текст для поиска" required/>
        <label className="form__label" htmlFor="amount">Элементов на странице</label>
        <select className="form__input" id="amount" value={amount || ''} name="amount" onChange={handleChange}>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <button className="form__button" type="submit">Найти</button>
      </form>
      <ul className="list">
        {commonList.map((item, index) => (
          <li className="list__item" key={index}>
            <ResultField element={item[0]} link={item[1]} />
          </li>
        ))
        }
      </ul>
    </main>
  );
}

export default App;
