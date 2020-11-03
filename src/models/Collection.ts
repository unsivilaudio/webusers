import axios, { AxiosResponse } from 'axios';
import Eventing from './Eventing';

class Collection<T, K> {
    models: T[] = [];
    events: Eventing = new Eventing();

    constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {
        axios
            .get(this.rootUrl)
            .then(({ data }: AxiosResponse) => {
                data.forEach((value: K) => {
                    this.models.push(this.deserialize(value));
                });
            })
            .then(() => {
                this.trigger('change');
            });
    }
}

export default Collection;
