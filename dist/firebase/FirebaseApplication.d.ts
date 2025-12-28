import { FirebaseApp } from "firebase/app";
import { Auth, User } from "firebase/auth";
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
    static uploadFile(path: string, data: Blob, metadata?: object): Promise<string>;
    static updateUserProfile(user: User, profile: {
        displayName?: string | null;
        photoURL?: string | null;
    }): Promise<void>;
    static signOut(): Promise<void>;
}
//# sourceMappingURL=FirebaseApplication.d.ts.map