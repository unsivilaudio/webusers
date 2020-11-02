import axios, { AxiosPromise } from 'axios';

interface HasId {
    id?: number;
}

class ApiSync<T extends HasId> {
    constructor(public rootUrl: string) {}

    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`);
    }

    save(data: T): AxiosPromise {
        const { id } = data;
        const method = id ? 'put' : 'post';
        const url =
            method === 'put' ? `${this.rootUrl}/${id}` : `${this.rootUrl}`;
        return axios[method](url, data);
    }
}

export default ApiSync;
