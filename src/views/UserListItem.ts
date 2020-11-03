import View from './View';
import User, { UserProps } from '../models/User';

export default class UserListItem extends View<User, UserProps> {
    template(): string {
        return `
            <tr key="${this.model.get('id')}">
                <td>${this.model.get('id')}</td>
                <td>${this.model.get('name')}</td>
                <td>${this.model.get('age')}</td>
            </tr>
        `;
    }
}
