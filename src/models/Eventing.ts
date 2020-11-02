type Callback = () => void;

export interface Events {
    [key: string]: Callback[];
}

class Eventing {
    events: Events = {};

    on = (eventName: string, callback: Callback) => {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    };

    trigger = (eventName: string): void => {
        const handlers = this.events[eventName];

        if (!handlers || handlers.length === 0) return;

        handlers.forEach(cb => cb());
    };
}

export default Eventing;
