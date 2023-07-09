import { IItem } from '../../types/';

function ResultField(props: IItem) {
  return (
    <>
      <a href={props.link} target="_blank" rel="noreferrer">{props.element}</a>
    </>
  );
}

export default ResultField;