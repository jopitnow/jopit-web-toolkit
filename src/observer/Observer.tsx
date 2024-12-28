import Observable from "./Observable";

/**
 * The Observer interface declares the update method, used by subjects.
 */
export default interface Observer {

    update(observable: Observable): void;
}
