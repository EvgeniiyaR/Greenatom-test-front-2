import './Input.css';
import { IInput } from '../../types/';

function Input({ isEmptySearch, search, ...otherProps }: IInput) {
  return (
    <input className={`main__input main__input_type_input ${isEmptySearch ? 'shake' : ''}`} value={search || ''} {...otherProps} />
  )
}

export default Input;