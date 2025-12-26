import { FirebaseApp } from "firebase/app";
export default class FirebaseApplication {
    private static _instance;
    private static _initPromise;
    private _app;
    private constructor();
    static init(config: any): Promise<void>;
    static get(): FirebaseApp;
}
//# sourceMappingURL=FirebaseApplication.d.ts.map