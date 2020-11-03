import View from './View';
import User, { UserProps } from '../models/User';

export default class UserShow extends View<User, UserProps> {
    template(): string {
        return `
            <div class="user-detail">
                <header>User Detail</header>
                <ul class="detail-list">
                    <li id="detail-name">Name: <span>${this.model.get(
                        'name'
                    )}</span></li>
                    <li id="detail-age">Age: <span>${this.model.get(
                        'age'
                    )}</span></li>
                </ul>
            </div>
        `;
    }
}
