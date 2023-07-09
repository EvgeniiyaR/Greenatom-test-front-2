import './App.css';
import ResultField from '../result-field/ResultField';
import { observer } from 'mobx-react-lite';
import AppStore from '../../stores/AppStore';
import Loader from '../loader/Loader';
import { useEffect } from 'react';
import Form from '../form/Form';

const App = observer(() => {
  const {
    search,
    amount,
    commonList,
    handleSubmit,
    handleChange,
    changeColor,
    isLoading,
    isRequest,
    isEmptySearch
  } = AppStore;

  useEffect(() => {
    changeColor();
  }, []);

  return (
    <main className="main">
      <Form search={search} amount={amount} onSubmit={handleSubmit} onChange={handleChange} isEmptySearch={isEmptySearch} />
      {isRequest && (isLoading ?
      <ul className="main__list">
        {commonList.map((item, index) => (
          <li className="main__item" key={index}>
            <ResultField element={item[0]} link={item[1]} />
          </li>
        ))}
      </ul>
        :
      <Loader />)
      }
    </main>
  );
})

export default App;
