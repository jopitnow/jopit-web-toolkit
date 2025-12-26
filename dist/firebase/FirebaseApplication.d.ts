import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";
import { Analytics } from "firebase/analytics";
import { FirebaseStorage } from "firebase/storage";
export default class FirebaseApplication {
    private static _instance;
    private static _initPromise;
    private _app;
    private _auth;
    private _analytics;
    private _storage;
    private constructor();
    private _onInitAnalytics;
    static init(config: any): Promise<void>;
    static get(): FirebaseApp;
    static getAuth(): Auth;
    static getAnalytics(): Analytics | null;
    static getStorage(): FirebaseStorage;
}
//# sourceMappingURL=FirebaseApplication.d.ts.map