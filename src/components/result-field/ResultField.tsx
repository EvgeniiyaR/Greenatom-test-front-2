import './ResultField.css';
import { IItem } from '../../types/';

const ResultField = ({ link, element }: IItem) => {

  return (
    <>
      <a className="main__link" href={link} target="_blank" rel="noreferrer">{element}</a>
    </>
  );
}

export default ResultField;