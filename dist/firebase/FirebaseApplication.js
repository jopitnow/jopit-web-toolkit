import { initializeApp } from "firebase/app";
export default class FirebaseApplication {
    constructor(config) {
        this._app = initializeApp(config);
    }
    static init(config) {
        this._instance = new this(config);
    }
    static get() {
        if (!this._instance) {
            throw new Error("You should call init() before getting the application.");
        }
        return this._instance._app;
    }
}
