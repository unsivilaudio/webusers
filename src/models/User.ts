import Eventing from './Eventing';
import Sync from './Sync';

interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhost:3000/users';

class User {
    events: Eventing = new Eventing();
    sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

    constructor(private data: UserProps) {}

    get(propName: string): string | number {
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
    }

    fetch(id: number): void {
        this.sync.fetch(id).then(({ data }): void => {
            this.data = data;
        });
    }

    save(): void {
        this.sync.save(this.data).then(({ data }) => {
            this.data = data;
        });
    }
}

export default User;
