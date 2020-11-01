import './assets/stylesheets/main.scss';
import User from './models/User';

const user = new User({ id: 1, name: 'Alan Iverson', age: 23 });
user.save();

setTimeout(() => console.log(user), 1000);
