import { ChangeEvent, FormEvent } from "react";
import api from "../utils/api";
import { makeAutoObservable } from "mobx";

class AppStore {
  public search: string = '';
  public amount: string = '10';
  public commonList: string[][] = [];
  public isLoading: boolean = false;
  public isRequest: boolean = false;
  public isEmptySearch: boolean = false;
  private root: HTMLElement;

  constructor() {
    makeAutoObservable(this);
    this.root = document.querySelector('#root') as HTMLElement;
  }

  generateColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  changeColor = () => {
    this.root.style.backgroundColor = `${this.generateColor()}`;
    this.root.style.transition = 'background-color 1s';
    this.root.style.overflowY = 'scroll';
  };

  public handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLInputElement;
    if (target.name === 'search') {
      this.search = target.value;
    } else if (target.name === 'amount') {
      this.amount = target.value;
    }
  }

  public handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.search) {
      this.isRequest = true;
      api.getSearch(this.search, Number(this.amount))
      .then((res) => {
        res[1].map((item: string[], index: number) => {
          return this.commonList.push([item, res[3][index]]);
        });
        this.search = '';
        this.isLoading = true;
      });
      this.commonList = [];
      this.isLoading = false;
      this.changeColor();
    } else {
      const timer = setInterval(() => {
        this.isEmptySearch = true;
      }, 500)
      setTimeout(() => {
        clearInterval(timer);
        this.isEmptySearch = false;
      }, 1500)
    }
  }
}

export default new AppStore;