import Observer from "./Observer";

/**
 * The Observable interface declares a set of methods for managing subscribers.
 */
export default interface Observable {
    // Attach an observer to the observable.
    attach(observer: Observer): void;

    // Detach an observer from the observable.
    detach(observer: Observer): void;

    // Notify all observers about an event.
    notify(): void;
}
