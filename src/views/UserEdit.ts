import View from './View';
import User, { UserProps } from '../models/User';
import UserForm from './UserForm';
import UserShow from './UserShow';

export default class UserEdit extends View<User, UserProps> {
    regionsMap(): { [key: string]: string } {
        return {
            userDetail: '#userDetail',
            userForm: '#userForm',
        };
    }

    onRender(): void {
        new UserShow(this.regions.userDetail, this.model).render();
        new UserForm(this.regions.userForm, this.model).render();
    }

    template(): string {
        return `
                <div id="userDetail"></div>
                <div id="userForm"></div>
        `;
    }
}
