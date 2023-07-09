import { ISelectOption } from '../../types';

function SelectOption({ value }: ISelectOption) {
  return (
    <option value={value}>{value}</option>
  )
}

export default SelectOption;