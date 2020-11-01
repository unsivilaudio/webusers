import axios, { AxiosResponse } from 'axios';

interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

type Callback = () => void;

class User {
    events: { [key: string]: Callback[] } = {};

    constructor(private data: UserProps) {}

    get(propName: string): string | number {
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
    }

    on(eventName: string, callback: Callback) {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName];

        if (!handlers || handlers.length === 0) return;

        handlers.forEach(cb => cb());
    }

    fetch(): void {
        axios
            .get(`http://localhost:3000/users/${this.get('id')}`)
            .then((res: AxiosResponse): void => {
                this.set(res.data);
            });
    }

    save(): void {
        const method = this.data.id ? 'put' : 'post';
        const params = method === 'put' ? `/${this.data.id}` : null;
        axios[method]('http://localhost:3000/users' + params, this.data).then(
            (res: AxiosResponse) => {
                this.set(res.data);
            }
        );
    }
}

export default User;
