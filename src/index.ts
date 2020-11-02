import './assets/stylesheets/main.scss';
import User from './models/User';

const collection = User.buildUserCollection();
collection.on('change', () => console.log(collection));
collection.fetch();
