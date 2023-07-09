import './Button.css';
import { IButton } from '../../types/';

function Button({ text, type }: IButton) {
  return (
    <button className='main__button' type={type}>{text}</button>
  )
}

export default Button;