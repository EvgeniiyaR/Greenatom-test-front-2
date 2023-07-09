import './Form.css';
import { IForm } from '../../types/';
import Label from '../label/Label';
import Button from '../button/Button';
import Input from '../input/Input';
import Select from '../select/Select';

function Form({ search, amount, onSubmit, onChange, isEmptySearch }: IForm) {
  return (
    <form className="main__form" onSubmit={onSubmit}>
      <div className="main__wrapper">
        <div className="main__wrapper-input">
          <Label htmlFor='search' text='Wikipedia Searcher' />
          <Input type='search' id='search' name='search' onChange={onChange} search={search} isEmptySearch={isEmptySearch} placeholder='Введите текст для поиска'/>
        </div>
        <Select amount={amount} onChange={onChange} id='amount' name='amount' />
      </div>
      <Button text='Найти' type='submit' />
    </form>
  )
}

export default Form;