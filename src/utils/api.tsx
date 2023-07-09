import { IConfig } from '../types/';

class Api {
  private _url: string;
  private _headers: HeadersInit;
	constructor(config: IConfig) {
		this._url = config.url;
		this._headers = config.headers;
	}

	_checkResponse(res: Response) {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Ошибка: ${res.status}`);
	}

	getSearch(search: string, limit = 10) {
		return fetch(`${this._url}format=json&action=opensearch&origin=*&search=${search}&limit=${limit}`, {
			method: "GET",
			headers: this._headers
		}).then((res) => this._checkResponse(res));
	}
}

const api = new Api({
  url: 'https://ru.wikipedia.org/w/api.php?',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;