import './assets/stylesheets/main.scss';
import Collection from './models/Collection';
import User, { UserProps } from './models/User';
import UserEdit from './views/UserEdit';
import UserList from './views/UserList';

const user = User.buildUser({ name: 'John Smith', age: 20 });

const root = document.querySelector('#users-edit');
if (root) {
    const userEdit = new UserEdit(root, user);
    userEdit.render();
}

const users = new Collection(
    'http://localhost:3000/users',
    (json: UserProps) => {
        return User.buildUser(json);
    }
);

const listEl = document.querySelector('#users-list');
users.on('change', () => {
    if (listEl) {
        new UserList(listEl, users).render();
    }
});

users.fetch();
