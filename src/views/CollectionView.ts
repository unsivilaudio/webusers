import Model from '../models/Model';
import Collection from '../models/Collection';

export default abstract class CollectionView<T extends Model<K>, K> {
    regions: { [key: string]: Element } = {};

    constructor(public parent: Element, public collection: Collection<T, K>) {
        this.bindCollection();
    }

    bindCollection(): void {
        this.collection.on('change', () => {
            console.log('Something Changed!');
            this.render();
        });
    }

    abstract template(): string;

    abstract renderItems(model: T[]): void;

    regionsMap(): { [key: string]: string } {
        return {};
    }

    eventsMap(): { [key: string]: () => void } {
        return {};
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');

            fragment.querySelectorAll(selector).forEach((el: Element): void => {
                el.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }

    mapRegions(fragment: DocumentFragment): void {
        const regionsMap = this.regionsMap();
        for (let key in regionsMap) {
            const selector = regionsMap[key];
            const element = fragment.querySelector(selector);
            if (element) {
                this.regions[key] = element;
            }
        }
    }

    render(): void {
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.mapRegions(templateElement.content);

        console.log(this.collection.models.length);
        this.renderItems(this.collection.models);

        this.parent.append(templateElement.content);
    }
}
