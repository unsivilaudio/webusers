import './assets/stylesheets/main.scss';
import User from './models/User';

const user = new User({ id: 3, name: 'Toby McClain', age: 42 });
user.save();

user.events.on('click', () => console.log('User was clicked'));
user.events.trigger('click');

setTimeout(() => console.log(user), 1000);
