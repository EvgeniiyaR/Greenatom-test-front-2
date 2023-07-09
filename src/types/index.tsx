import { ChangeEvent, FormEvent } from "react";

export interface IConfig {
  url: string;
  headers: HeadersInit;
}

export interface IItem {
  element: string;
  link: string;
}

export interface IButton {
  text: string;
  type: 'button' | 'reset' | 'submit' | undefined;
}

export interface ILabel {
  text: string;
  htmlFor: string;
}

export interface IForm {
  search: string;
  amount: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
  isEmptySearch: boolean;
}

export interface IInput {
  search: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isEmptySearch: boolean;
  type: 'search';
  id: string;
  placeholder: string;
  name: string;
}

export interface ISelect {
  amount: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  id: string;
}
export interface ISelectOption {
  value: string;
}