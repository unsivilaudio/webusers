import './assets/stylesheets/main.scss';
import User from './models/User';

const user = new User({ name: 'Tim Tebo', age: 41 });

user.on('change', () => console.log('Hi there!'));
user.on('click', () => console.log('User was Clicked'));

user.trigger('click');
