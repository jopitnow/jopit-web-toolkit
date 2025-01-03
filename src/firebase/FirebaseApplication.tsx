import { FirebaseApp, initializeApp } from "firebase/app";

export default class FirebaseApplication {

    private static _instance: FirebaseApplication;

    private _app: FirebaseApp

    private constructor(config) {
        this._app = initializeApp(config);
    }

    public static init(config) {
        this._instance = new this(config);
    }

    public static get(): FirebaseApp {
        if (!this._instance) {
            throw new Error("You should call init() before getting the application.")
        }

        return this._instance._app
    }
}
