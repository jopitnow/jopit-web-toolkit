import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, initializeAuth, browserLocalPersistence } from "firebase/auth";
import { Analytics, initializeAnalytics, isSupported } from "firebase/analytics";
import { FirebaseStorage, getStorage } from "firebase/storage";

export default class FirebaseApplication {

    private static _instance: FirebaseApplication;
    private static _initPromise: Promise<void> | null = null;

    private _app: FirebaseApp;
    private _auth: Auth;
    private _analytics: Analytics | null = null;
    private _storage: FirebaseStorage;

    private constructor(config) {
        this._app = initializeApp(config);
        this._auth = initializeAuth(this._app, {persistence: browserLocalPersistence});
        this._storage = getStorage(this._app);
    }

    private async _onInitAnalytics(): Promise<void> {
        const supported = await isSupported();
        if (supported) {
            this._analytics = initializeAnalytics(this._app);
        }
    }

    public static async init(config): Promise<void> {
        if (this._instance) {
            return Promise.resolve();
        }

        if (this._initPromise) {
            return this._initPromise;
        }

        this._initPromise = (async () => {
            this._instance = new this(config);
            await this._instance._onInitAnalytics();
        })();

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

    public static getAnalytics(): Analytics | null {
        if (!this._instance) {
            throw new Error("You should call init() before getting analytics.")
        }
        return this._instance._analytics;
    }

    public static getStorage(): FirebaseStorage {
        if (!this._instance) {
            throw new Error("You should call init() before getting storage.")
        }
        return this._instance._storage;
    }
}
