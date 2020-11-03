import User, { UserProps } from '../models/User';
import View from './View';

class UserForm extends View<User, UserProps> {
    eventsMap(): { [key: string]: () => void } {
        return {
            'click:#updateNameBtn': this.onSetNameClick,
            'click:#updateAgeBtn': this.onSetAgeClick,
            'click:#saveBtn': this.onSaveClick,
        };
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    };

    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');
        if (input) {
            const name = input.value;
            this.model.set({ name });
        }
    };

    onSaveClick = (): void => {
        this.model.save();
    };

    template(): string {
        return `
            <form class="user-form" id="user-form">
                <div class="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter a new name..."
                    />
                </div>
                <div class="button-group">
                    <button id="updateNameBtn" type="button">
                        Update Name
                    </button>
                    <button id="updateAgeBtn" type="button">
                        Random Age
                    </button>
                    <button id="saveBtn" type="button">Save</button>
                </div>
            </form>
        `;
    }
}

export default UserForm;
