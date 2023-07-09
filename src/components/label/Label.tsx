import './Label.css';
import { ILabel } from '../../types/';

function Label({ text, htmlFor }: ILabel) {
  return (
    <label className="main__label" htmlFor={htmlFor}>{text}</label>
  )
}

export default Label;