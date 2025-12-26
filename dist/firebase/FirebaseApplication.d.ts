import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";
import { Analytics } from "firebase/analytics";
export default class FirebaseApplication {
    private static _instance;
    private static _initPromise;
    private _app;
    private _auth;
    private _analytics;
    private constructor();
    static init(config: any): Promise<void>;
    static get(): FirebaseApp;
    static getAuth(): Auth;
    static getAnalytics(): Analytics;
}
//# sourceMappingURL=FirebaseApplication.d.ts.map