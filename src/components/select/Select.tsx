import './Select.css';
import { ISelect } from '../../types/';
import SelectOption from '../select-option/SelectOption';

function Form({ amount, ...otherProps }: ISelect) {
  return (
    <select className="main__input main__input_type_select" value={amount || ''} {...otherProps}>
      <SelectOption value='10' />
      <SelectOption value='15' />
      <SelectOption value='20' />
    </select>
  )
}

export default Form;