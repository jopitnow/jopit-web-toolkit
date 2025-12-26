import Observer from "./Observer";
/**
 * The Observable interface declares a set of methods for managing subscribers.
 */
export default interface Observable {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}
//# sourceMappingURL=Observable.d.ts.map