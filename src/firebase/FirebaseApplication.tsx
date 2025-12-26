import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, initializeAuth, browserLocalPersistence } from "firebase/auth";
import { Analytics, initializeAnalytics } from "firebase/analytics";

export default class FirebaseApplication {

    private static _instance: FirebaseApplication;
    private static _initPromise: Promise<void> | null = null;

    private _app: FirebaseApp;
    private _auth: Auth;
    private _analytics: Analytics;

    private constructor(config) {
        this._app = initializeApp(config);
        this._auth = initializeAuth(this._app, {persistence: browserLocalPersistence});
        this._analytics = initializeAnalytics(this._app);
    }

    public static init(config): Promise<void> {
        if (this._instance) {
            return Promise.resolve();
        }

        if (this._initPromise) {
            return this._initPromise;
        }

        this._initPromise = new Promise((resolve) => {
            this._instance = new this(config);
            resolve();
        });

        return this._initPromise;
    }

    public static get(): FirebaseApp {
        if (!this._instance) {
            throw new Error("You should call init() before getting the application.")
        }
        return this._instance._app;
    }

    public static getAuth(): Auth {
        if (!this._instance) {
            throw new Error("You should call init() before getting auth.")
        }
        return this._instance._auth;
    }

    public static getAnalytics(): Analytics {
        if (!this._instance) {
            throw new Error("You should call init() before getting analytics.")
        }
        return this._instance._analytics;
    }
}
