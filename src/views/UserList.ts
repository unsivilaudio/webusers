import User, { UserProps } from '../models/User';
import CollectionView from './CollectionView';
import UserListItem from './UserListItem';

export default class UserList extends CollectionView<User, UserProps> {
    regionsMap(): { [key: string]: string } {
        return {
            userListItems: '#user-list-items',
        };
    }

    renderItems(users: User[]): void {
        const userListItems = this.regions.userListItems;
        users.forEach((user: User) => {
            const item = document.createElement('tr');
            new UserListItem(item, user).render();
            userListItems.append(item);
        });
    }

    template(): string {
        return `
            <table class="user-table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody id="user-list-items">
                </tbody>
            </table>
        `;
    }
}
