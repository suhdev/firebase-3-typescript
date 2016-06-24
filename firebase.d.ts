// Type definitions for firebase v3.0.5
// Project: https://www.npmjs.com/package/firebase
// Definitions by: Suhail Abood <https://github.com/suhdev/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="./es6-promise.d.ts"/>

declare namespace firebase {
	/**
	 * Browser configuration object. 
	 * 
	 * @export
	 * @interface FirebaseConfig
	 */
	export interface FirebaseConfig{
        apiKey:string;
        authDomain:string;
        databaseURL:string;
        storageBucket:string;
    }

    var SDK_VERSION:string;

    export interface ServiceAccountDefinition{
        projectId: string;
        clientEmail: string;
        privateKey: string;
    }
    
    /**
     * Server configuration object 
     */
    export interface FirebaseServiceConfig {
        /**
         * Either a string representing the path to the key.json of the service account or an object literal of type {ServiceAccountDefinition}
         */
        serviceAccount: string|ServiceAccountDefinition;
        databaseURL: string;
    }
    
    var apps:FirebaseApplication[];
    
    
    /**
     * Initializes the firebase application. 
     * 
     * @export
     * @param {FirebaseConfig} config the firebase configuration, this can be either a user 
     * @param {string} [name] the name of the application defaults to [DEFAULT] 
     * @returns {FirebaseApplication} the initialized firebase application instance. 
     */
    export function initializeApp(config:FirebaseConfig|FirebaseServiceConfig,
        name?:string):FirebaseApplication;
    

    /**
     * The namespace for all Firebase Storage functionality. The returned service is initialized with a particular app which contains the project's storage location, or uses the default app if none is provided.
     * 
     * @export
     * @param {FirebaseApplication} [app] The app to create a storage service for. If not passed, uses the default app. Value must not be null.
     * @returns {FirebaseStorage} non-null {firebase.storage.Storage} 
     */
    export function storage(app?:FirebaseApplication):FirebaseStorage;
        
    /**
     * (description)
     * 
     * @export
     * @interface UserInfo
     */
    export interface UserInfo {
        /**
         * (description)
         * 
         * @type {string}
         */
        displayName:string;
        /**
         * (description)
         * 
         * @type {string}
         */
        email:string;
        /**
         * (description)
         * 
         * @type {string}
         */
        photoURL:string;
        /**
         * (description)
         * 
         * @type {string}
         */
        providerId:string;
        /**
         * (description)
         * 
         * @type {string}
         */
        uid:string;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface SettableMetadata
     */
    export interface SettableMetadata{
        /**
         * (description)
         * 
         * @type {string}
         */
        cacheControl:string;
        /**
         * (description)
         * 
         * @type {string}
         */
        contentDisposition:string;
        /**
         * (description)
         * 
         * @type {string}
         */
        contentEncoding:string;
        /**
         * (description)
         * 
         * @type {string}
         */
        contentLanguage:string;
        /**
         * (description)
         * 
         * @type {string}
         */
        contentType:string;
        /**
         * (description)
         * 
         * @type {*}
         */
        customMetadata:any;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface FullMetadata
     * @extends {SettableMetadata}
     */
    export interface FullMetadata extends SettableMetadata{
        /**
         * (description)
         * 
         * @type {string}
         */
        bucket:string;
        /**
         * (description)
         * 
         * @type {string[]}
         */
        downloadURLs:string[];
        /**
         * (description)
         * 
         * @type {string}
         */
        fullPath:string;
        /**
         * (description)
         * 
         * @type {string}
         */
        generation:string;
        /**
         * (description)
         * 
         * @type {string}
         */
        md5Hash:string;
        /**
         * (description)
         * 
         * @type {string}
         */
        metageneration:string;
        /**
         * (description)
         * 
         * @type {string}
         */
        name:string;
        /**
         * (description)
         * 
         * @type {number}
         */
        size:number;
        /**
         * (description)
         * 
         * @type {string}
         */
        timeCreated:string;
        /**
         * (description)
         * 
         * @type {string}
         */
        updated:string;
        
    }
    
    /**
     * (description)
     * 
     * @export
     * @enum {number}
     */
    export enum TaskEvent {
        /**
         * (description)
         */
        STATE_CHANGED
    }
    
    
    
    /**
     * (description)
     * 
     * @export
     * @enum {number}
     */
    export enum TaskState {
        /**
         * (description)
         */
        RUNNING,
        /**
         * (description)
         */
        PAUSED,
        /**
         * (description)
         */
        SUCCESS,
        /**
         * (description)
         */
        CANCELED,
        /**
         * (description)
         */
        ERROR
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface UploadTaskSnapshot
     */
    export interface UploadTaskSnapshot{
        /**
         * (description)
         * 
         * @type {number}
         */
        bytesTransferred:number;
        /**
         * (description)
         * 
         * @type {string}
         */
        downloadURL:string;
        /**
         * (description)
         * 
         * @type {FullMetadata}
         */
        metadata:FullMetadata;
        /**
         * (description)
         * 
         * @type {StorageReference}
         */
        ref:StorageReference;
        /**
         * (description)
         * 
         * @type {TaskState}
         */
        state:TaskState;
        /**
         * (description)
         * 
         * @type {UploadTask}
         */
        task:UploadTask;
        /**
         * (description)
         * 
         * @type {number}
         */
        totalBytes:number;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface Observer
     */
    export interface Observer {
        /**
         * (description)
         * 
         * @type {Function}
         */
        next?:Function;
        /**
         * (description)
         * 
         * @type {Function}
         */
        error?:Function;
        /**
         * (description)
         * 
         * @type {Function}
         */
        complete?:Function;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface SubscribeFn
     */
    export interface SubscribeFn{
        (next?:Function,error?:Function,complete?:Function):void;
    }    
    
    /**
     * (description)
     * 
     * @export
     * @interface UnsubscribeFn
     */
    export interface UnsubscribeFn{
        ():void;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface UploadMetadata
     * @extends {SettableMetadata}
     */
    export interface UploadMetadata extends SettableMetadata{
        /**
         * (description)
         * 
         * @type {string}
         */
        md5Hash:string;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface UploadTask
     */
    export interface UploadTask{
        /**
         * (description)
         * 
         * @type {UploadTaskSnapshot}
         */
        snapshot:UploadTaskSnapshot;
        /**
         * (description)
         * 
         * @returns {boolean} (description)
         */
        cancel():boolean;
        /**
         * (description)
         * 
         * @param {string} eventType (description)
         * @param {(Function|Observer)} [nextOrObserver] (description)
         * @param {Function} [error] (description)
         * @param {Function} [complete] (description)
         * @returns {(SubscribeFn|UnsubscribeFn)} (description)
         */
        on(eventType:string,nextOrObserver?:Function|Observer,error?:Function,complete?:Function):SubscribeFn|UnsubscribeFn;
        /**
         * (description)
         * 
         * @returns {boolean} (description)
         */
        pause():boolean;
        /**
         * (description)
         * 
         * @returns {boolean} (description)
         */
        resume():boolean;
        
        
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface StorageReference
     */
    export interface StorageReference{
        /**
         * (description)
         * 
         * @type {string}
         */
        bucket:string;
        /**
         * (description)
         * 
         * @type {string}
         */
        fullPath:string;
        /**
         * (description)
         * 
         * @type {string}
         */
        name:string;
        /**
         * (description)
         * 
         * @type {StorageReference}
         */
        parent:StorageReference;
        /**
         * (description)
         * 
         * @type {StorageReference}
         */
        root:StorageReference;
        /**
         * (description)
         * 
         * @type {FirebaseStorage}
         */
        storage:FirebaseStorage;
        /**
         * (description)
         * 
         * @param {string} path (description)
         * @returns {StorageReference} (description)
         */
        child(path:string):StorageReference;
        /**
         * (description)
         * 
         * @returns {Promise<void>} (description)
         */
        delete():Promise<void>;
        /**
         * (description)
         * 
         * @returns {Promise<string>} (description)
         */
        getDownloadURL():Promise<string>;
        /**
         * (description)
         * 
         * @returns {Promise<FullMetadata>} (description)
         */
        getMetaData():Promise<FullMetadata>;
        /**
         * (description)
         * 
         * @param {Blob} blob (description)
         * @param {UploadMetadata} metadata (description)
         * @returns {UploadTask} (description)
         */
        put(blob:Blob|File, metadata?:UploadMetadata):UploadTask;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface FirebaseStorage
     */
    export interface FirebaseStorage{
        /**
         * (description)
         * 
         * @type {number}
         */
        maxOperationRetryTime:number;
        /**
         * (description)
         * 
         * @type {number}
         */
        maxUploadRetryTime:number;
        /**
         * (description)
         * 
         * @param {string} path (description)
         * @returns {StorageReference} (description)
         */
        ref(path:string):StorageReference;
        /**
         * (description)
         * 
         * @param {string} url (description)
         * @returns {StorageReference} (description)
         */
        refFromURL(url:string):StorageReference;
        /**
         * (description)
         * 
         * @param {number} time (description)
         */
        setMaxOperationRetryTime(time:number):void;
        /**
         * (description)
         * 
         * @param {number} time (description)
         */
        setMaxUploadRetryTime(time:number):void;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface AuthCredential
     */
    export interface AuthCredential{
        /**
         * (description)
         * 
         * @type {string}
         */
        provider:string;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface UserCredential
     */
    export interface UserCredential{
        /**
         * (description)
         * 
         * @type {User}
         */
        user:User;
        /**
         * (description)
         * 
         * @type {AuthCredential}
         */
        credential:AuthCredential;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface AuthProvider
     */
    export interface AuthProvider {
        /**
         * (description)
         * 
         * @type {string}
         */
        providerId:string;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface EmailAuthProvider
     * @extends {AuthProvider}
     */
    export interface EmailAuthProvider extends AuthProvider {
        /**
         * (description)
         * 
         * @type {string}
         */
        PROVIDER_ID:string;
        /**
         * (description)
         * 
         * @param {string} email (description)
         * @param {string} password (description)
         * @returns {AuthCredential} (description)
         */
        credential(email:string,password:string):AuthCredential;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface GithubAuthProider
     * @extends {AuthProvider}
     */
    export interface GithubAuthProider extends AuthProvider{
        new ():GithubAuthProider;
        /**
         * (description)
         * 
         * @type {string}
         */
        PROVIDER_ID:string;
        /**
         * (description)
         * 
         * @param {string} scope (description)
         */
        addScope(scope:string):void;
        /**
         * (description)
         * 
         * @param {string} token (description)
         * @returns {AuthCredential} (description)
         */
        credential(token:string):AuthCredential;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface GoogleAuthProvider
     * @extends {AuthProvider}
     */
    export interface GoogleAuthProvider extends AuthProvider{
        new():GoogleAuthProvider;
        /**
         * (description)
         * 
         * @param {string} scope (description)
         */
        addScope(scope:string):void;
        /**
         * (description)
         * 
         * @param {string} idToken (description)
         * @param {string} accessToken (description)
         * @returns {AuthCredential} (description)
         */
        credential(idToken:string,accessToken:string):AuthCredential;
        /**
         * (description)
         * 
         * @type {string}
         */
        PROVIDER_ID:string;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface FacebookAuthProvider
     * @extends {AuthProvider}
     */
    export interface FacebookAuthProvider extends AuthProvider{
        /**
         * (description)
         * 
         * @type {string}
         */
        PROVIDER_ID:string;
        /**
         * (description)
         * 
         * @param {string} scope (description)
         */
        addScope(scope:string):void;
        /**
         * (description)
         * 
         * @param {string} token (description)
         * @returns {AuthCredential} (description)
         */
        credential(token:string):AuthCredential;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface TwitterAuthProvider
     * @extends {AuthProvider}
     */
    export interface TwitterAuthProvider extends AuthProvider{
        new():TwitterAuthProvider;
        /**
         * (description)
         * 
         * @type {string}
         */
        PROVIDER_ID:string;
        /**
         * (description)
         * 
         * @param {string} token (description)
         * @param {string} secret (description)
         * @returns {AuthCredential} (description)
         */
        crendential(token:string,secret:string):AuthCredential;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface UserProfile
     */
    export interface UserProfile {
        /**
         * (description)
         * 
         * @type {string}
         */
        displayName:string; 
        /**
         * (description)
         * 
         * @type {string}
         */
        photoURL:string;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface ActionCodeInfoData
     */
    export interface ActionCodeInfoData{
        /**
         * (description)
         * 
         * @type {string}
         */
        email:string;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface ActionCodeInfo
     */
    export interface ActionCodeInfo {
        /**
         * (description)
         * 
         * @type {ActionCodeInfoData}
         */
        data:ActionCodeInfoData;
    } 
        
    /**
     * (description)
     * 
     * @export
     * @interface User
     * @extends {UserInfo}
     */
    export interface User extends UserInfo{
        /**
         * (description)
         * 
         * @type {boolean}
         */
        emailVerified:boolean;
        /**
         * (description)
         * 
         * @type {boolean}
         */
        isAnonymous:boolean;
        /**
         * (description)
         * 
         * @type {UserInfo[]}
         */
        providerData:UserInfo[];
        /**
         * (description)
         * 
         * @type {string}
         */
        refreshToken:string;
        /**
         * (description)
         * 
         * @returns {Promise<void>} (description)
         */
        delete():Promise<void>;
        /**
         * (description)
         * 
         * @param {boolean} [forceRefresh] (description)
         * @returns {Promise<string>} (description)
         */
        getToken(forceRefresh?:boolean):Promise<string>;
        /**
         * (description)
         * 
         * @param {AuthCredential} credentials (description)
         * @returns {Promise<User>} (description)
         */
        link(credentials:AuthCredential):Promise<User>;
        /**
         * (description)
         * 
         * @param {AuthProvider} provider (description)
         * @returns {Promise<UserCredential>} (description)
         */
        linkWithPopup(provider:AuthProvider):Promise<UserCredential>;
        /**
         * (description)
         * 
         * @param {AuthCredential} credentil (description)
         * @returns {Promise<void>} (description)
         */
        reauthenticate(credentil:AuthCredential):Promise<void>;
        /**
         * (description)
         * 
         * @returns {Promise<void>} (description)
         */
        reload():Promise<void>;
        /**
         * (description)
         * 
         * @returns {Promise<void>} (description)
         */
        sendEmailVerification():Promise<void>;
        /**
         * (description)
         * 
         * @param {string} providerId (description)
         * @returns {Promise<User>} (description)
         */
        unlink(providerId:string):Promise<User>;
        /**
         * (description)
         * 
         * @param {string} newEmail (description)
         * @returns {Promise<void>} (description)
         */
        updateEmail(newEmail:string):Promise<void>;
        /**
         * (description)
         * 
         * @param {string} newPassword (description)
         * @returns {Promise<void>} (description)
         */
        updatePassword(newPassword:string):Promise<void>;
        /**
         * (description)
         * 
         * @param {UserProfile} profile (description)
         * @returns {Promise<void>} (description)
         */
        updateProfile(profile:UserProfile):Promise<void>;
    }
        
    /**
     * (description)
     * 
     * @export
     * @class Auth
     */
    export class Auth {        
        /**
         * Sign out.
         *
         * @type {Promise<void>}
         */
        signOut(): Promise<void>;

        /**
         * Sign in via email/password.
         *
         * @type {Promise<User>}
         */
        signInWithEmailAndPassword(email: string, password:string): Promise<User>;

        /**
         * Creates a user via email/password.
         *
         * @type {Promise<User>}
         */
        createUserWithEmailAndPassword(email: string, password:string): Promise<User>;

        /**
         * (description)
         * 
         * @type {FirebaseApplication}
         */
        app:FirebaseApplication;
        /**
         * (description)
         * 
         * @type {User}
         */
        currentUser:User;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface CallbackWithError
     */
    export interface CallbackWithError{
        (err:Error):void;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface OnDisconnect
     */
    export interface OnDisconnect{
        /**
         * (description)
         * 
         * @param {CallbackWithError} onComplete (description)
         * @returns {Promise<void>} (description)
         */
        cancel(onComplete?:CallbackWithError):Promise<void>;
        /**
         * (description)
         * 
         * @param {CallbackWithError} onComplete (description)
         * @returns {Promise<void>} (description)
         */
        remove(onComplete?:CallbackWithError):Promise<void>;
        /**
         * (description)
         * 
         * @param {*} value (description)
         * @param {CallbackWithError} onComplete (description)
         * @returns {Promise<void>} (description)
         */
        set(value:any,onComplete?:CallbackWithError):Promise<void>;
        /**
         * (description)
         * 
         * @param {*} value (description)
         * @param {number} priority (description)
         * @param {CallbackWithError} onComplete (description)
         * @returns {Promise<void>} (description)
         */
        setWithPriority(value:any,priority:number,onComplete?:CallbackWithError):Promise<void>;
        /**
         * (description)
         * 
         * @param {*} objectToMerge (description)
         * @param {CallbackWithError} onComplete (description)
         */
        update(objectToMerge:any,onComplete:CallbackWithError):void;
        
        
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface ThenableReference
     * @extends {DatabaseReference}
     * @extends {DatabaseQuery}
     */
    export interface ThenableReference extends DatabaseReference{
        
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface ActionFunction
     */
    export interface ActionFunction{
        (snapshot:DataSnapshot):void;
    }
    
    /**
     * A Query sorts and filters the data at a database location so only a subset of the child data is included. 
     * This can be used to order a collection of data by some attribute (e.g. height of dinosaurs) as well as to restrict a large list of items (e.g. chat messages) down to a number suitable
     * for synchronizing to the client. Queries are created by chaining together one or more of the filter methods defined here.
     * 
     * Just as with a Reference, you can receive data from a Query by using the on() method. 
     * You will only receive events and DataSnapshots for the subset of the data that matches your query.
     * 
     * @export
     * @interface DatabaseQuery
     */
    export interface DatabaseQuery{
        /**
         * Returns a Reference to the Query's location.
         */
        ref:DatabaseReference;
        /**
         * Creates a Query with the specified ending point.
         * 
         * Using startAt(), endAt(), and equalTo() allows you to choose arbitrary starting and ending points for your queries.
         * 
         * The ending point is inclusive, so children with exactly the specified value will be included in the query. 
         * The optional key argument can be used to further limit the range of the query. If it is specified, then children that have exactly the specified value must also have a key name less than or equal to the specified key.
         * 
         * @param {any} value The value to end at. The argument type depends on which orderBy*() function was used in this query. Specify a value that matches the orderBy*() type. When used in combination with orderByKey(), the value must be a string.
         * @param {any} [key] The child key to end at, among the children with the previously specified priority. This argument is only allowed if ordering by priority.
         * @returns {DatabaseQuery} 
         */
        endAt(value:any,key?:any):DatabaseQuery;
        
        /**
         * Creates a Query which includes children which match the specified value.
         * 
         * Using startAt(), endAt(), and equalTo() allows us to choose arbitrary starting and ending points for our queries.
         * 
         * The optional key argument can be used to further limit the range of the query. 
         * If it is specified, then children that have exactly the specified value must also have exactly the specified key as their key name. 
         * This can be used to filter result sets with many matches for the same value.
         * 
         * @param {*} value The value to match for. The argument type depends on which orderBy*() function was used in this query. Specify a value that matches the orderBy*() type. When used in combination with orderByKey(), the value must be a string.
         * @param {*} [key] The child key to start at, among the children with the previously specified priority. This argument is only allowed if ordering by priority.
         * @returns {DatabaseQuery} 
         */
        equalTo(value:any,key?:any):DatabaseQuery;
        /**
         * Generates a new Query limited to the first specific number of children.
         * 
         * The limitToFirst() method is used to set a maximum number of children to be synced for a given callback. 
         * If we set a limit of 100, we will initially only receive up to 100 child_added events. 
         * If we have less than 100 messages stored in our database, a child_added event will fire for each message. 
         * However, if we have over 100 messages, we will only receive a child_added event for the first 100 ordered messages. 
         * As items change, we will receive child_removed events for each item that drops out of the active list, so that the total number stays at 100.
         * 
         * @param {number} limit The maximum number of nodes to include in this query. Value must not be null.
         * @returns {DatabaseQuery} (description)
         * 
         * 
         */
        limitToFirst(limit:number):DatabaseQuery;
        /**
         * (description)
         * 
         * @param {number} limit (description)
         * @returns {DatabaseQuery} (description)
         */
        limitToLast(limit:number):DatabaseQuery;
        /**
         * (description)
         * 
         * @param {string} [eventType] (description)
         * @param {Function} [callback] (description)
         * @param {*} [context] (description)
         */
        off(eventType?:string,callback?:Function,context?:any):void;
        /**
         * (description)
         * 
         * @param {string} eventType (description)
         * @param {Function} callback (description)
         * @param {(Function|any)} [cancelCallbackOrContext] (description)
         * @param {*} [context] (description)
         * @returns {Function} (description)
         */
        on(eventType:string,callback:Function,cancelCallbackOrContext?:Function|any,context?:any):Function;
        /**
         * (description)
         * 
         * @param {string} eventType (description)
         * @param {Function} userCallback (description)
         * @returns {Promise<any>} (description)
         */
        once(eventType:string,userCallback?:Function):Promise<any>;
        /**
         * (description)
         * 
         * @returns {OnDisconnect} (description)
         */
        onDisconnect():OnDisconnect;
        /**
         * (description)
         * 
         * @param {string} path (description)
         * @returns {DatabaseQuery} (description)
         */
        orderByChild(path:string):DatabaseQuery;
        /**
         * (description)
         * 
         * @returns {DatabaseQuery} (description)
         */
        orderByKey():DatabaseQuery;
        /**
         * (description)
         * 
         * @returns {DatabaseQuery} (description)
         */
        orderByPriority():DatabaseQuery;
        /**
         * (description)
         * 
         * @returns {DatabaseQuery} (description)
         */
        orderByValue():DatabaseQuery;
        /**
         * (description)
         * 
         * @param {*} value (description)
         * @param {CallbackWithError} onComplete (description)
         * @returns {ThenableReference} (description)
         */
        push(value:any,onComplete?:CallbackWithError):ThenableReference; 
        /**
         * (description)
         * 
         * @returns {string} (description)
         */
        toString():string;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface DataSnapshot
     */
    export interface DataSnapshot{
        /**
         * (description)
         * 
         * @type {string}
         */
        key:string;
        /**
         * (description)
         * 
         * @type {DatabaseReference}
         */
        ref:DatabaseReference;
        /**
         * (description)
         * 
         * @param {string} path (description)
         * @returns {DataSnapshot} (description)
         */
        child(path:string):DataSnapshot;
        /**
         * (description)
         * 
         * @returns {boolean} (description)
         */
        exists():boolean;
        /**
         * (description)
         * 
         * @returns {*} (description)
         */
        exportVal():any;
        /**
         * (description)
         * 
         * @param {ActionFunction} action (description)
         * @returns {boolean} (description)
         */
        forEach(action:ActionFunction):boolean;
        /**
         * (description)
         * 
         * @returns {(string|number)} (description)
         */
        getPriority():string|number;
        /**
         * (description)
         * 
         * @param {string} path (description)
         * @returns {boolean} (description)
         */
        hasChild(path:string):boolean;
        /**
         * (description)
         * 
         * @returns {boolean} (description)
         */
        hasChildren():boolean;
        /**
         * (description)
         * 
         * @returns {number} (description)
         */
        numChildren():number;
        /**
         * (description)
         * 
         * @returns {*} (description)
         */
        val():any;
    }
    
    /**
     * (description)
     * 
     * @export
     * @interface TransactionResult
     */
    export interface TransactionResult{
        /**
         * (description)
         * 
         * @type {boolean}
         */
        committed:boolean;
        /**
         * (description)
         * 
         * @type {DataSnapshot}
         */
        snapshot:DataSnapshot;
    }
    
    /**
     * A Reference represents a specific location in your database and can be used for reading or writing data to that database location.
     * 
     * You can reference the root, or child location in your database by calling firebase.database().ref() or 
     * firebase.database().ref("child/path").
     * 
     * Writing is done with the set() method and reading can be done with the on() method.
     * 
     * @export
     * @interface DatabaseReference
     * @extends {DatabaseQuery}
     */
    export interface DatabaseReference extends DatabaseQuery{
        /**
         * The last part of the current path.
         * 
         * For example, "ada" is the key for https://sample-app.firebaseio.com/users/ada.
         * 
         * The key of the root Reference is null.
         * 
         * @type {string}
         */
        key:string;
        /**
         * The parent location of a Reference.
         * 
         * @type {DatabaseReference}
         */
        parent:DatabaseReference; 
        /**
         * Returns a Reference to the Query's location.
         * 
         * @type {*}
         */
        ref:any;
        /**
         * (description)
         * 
         * @type {DatabaseReference}
         */
        root:DatabaseReference;
        /**
         * (description)
         * 
         * @param {string} path (description)
         * @returns {DatabaseReference} (description)
         */
        child(path:string):DatabaseReference;
        /**
         * (description)
         * 
         * @param {number} priority (description)
         * @param {CallbackWithError} onComplete (description)
         * @returns {Promise<void>} (description)
         */
        setPriority(priority:number,onComplete?:CallbackWithError):Promise<void>;
        /**
         * (description)
         * 
         * @param {*} newVal (description)
         * @param {number} newPriority (description)
         * @param {CallbackWithError} onComplete (description)
         * @returns {Promise<void>} (description)
         */
        setWithPriority(newVal:any,newPriority:number,onComplete?:CallbackWithError):Promise<void>;
        /**
         * (description)
         * 
         * @param {*} transationUpdate (description)
         * @param {CallbackWithError} onComplete (description)
         * @param {boolean} applyLocally (description)
         * @returns {Promise<TransactionResult>} (description)
         */
        transaction(transationUpdate:any,onComplete:CallbackWithError,
        applyLocally:boolean):Promise<TransactionResult>;
        /**
         * (description)
         * 
         * @param {*} objectToMerge (description)
         * @param {CallbackWithError} onComplete (description)
         * @returns {Promise<void>} (description)
         */
        update(objectToMerge:any,onComplete?:CallbackWithError):Promise<void>;
        /**
         * (description)
         * 
         * @param {CallbackWithError} onComplete (description)
         * @returns {Promise<void>} (description)
         */
        remove(onComplete?:CallbackWithError):Promise<void>;
        /**
         * (description)
         * 
         * @param {*} newVal (description)
         * @param {CallbackWithError} onComplete (description)
         * @returns {Promise<void>} (description)
         */
        set(newVal:any,onComplete?:CallbackWithError):Promise<void>;
        
    }
    
    /**
     * The Firebase Database service interface.
     * 
     * @export
     * @class Database
     */
    export class Database {
        /**
         * The App associated with the Database service instance.
         * 
         * @type {FirebaseApplication}
         */
        app:FirebaseApplication;
        /**
         * Disconnect from the server (all database operations will be completed offline).
         * 
         * The client automatically maintains a persistent connection to the database server, 
         * which will remain active indefinitely and reconnect when disconnected. However, 
         * the goOffline() and goOnline() methods may be used to control the client 
         * connection in cases where a persistent connection is undesirable.
         * 
         * While offline, the client will no longer receive data updates from the database. 
         * However, all database operations performed locally will continue to immediately fire events, 
         * allowing your application to continue behaving normally. Additionally, 
         * each operation performed locally will automatically be queued and retried upon reconnection to the database server.
         */
        goOffline():void;
        /**
         * (Re)connect to the server and synchronize the offline database state with the server state.
         * 
         * This method should be used after disabling the active connection with goOffline(). 
         * Once reconnected, the client will transmit the proper data and fire the appropriate events so that your client 
         * "catches up" automatically.
         */
        goOnline():void;
        /**
         * Returns a {DatabaseReference} to the root or the specified path.
         * 
         * @param {string} path the path to get a reference to.
         * @returns {DatabaseReference} 
         */
        ref(path?:string):DatabaseReference;
        /**
         * Returns a reference to the root or the path specified in url. 
         * An exception is thrown if the url is not in the same domain as the current database. 
         * 
         * @param {string} url the reference's URL
         * @returns {DatabaseReference} 
         */
        refFromURL(url:string):DatabaseReference;
    }
    
    /**
     * A Firebase App holds the initialization information for a collection of services.
     * 
     * @export
     * @class FirebaseApplication
     */
    export class FirebaseApplication{
        /**
         * The (read-only) name (identifier) for this App. '[DEFAULT]' is the name of the default App.
         * 
         * @type {string}
         */
        name:string;
        /**
         * The (read-only) configuration options (the original parameters given in firebase.initializeApp()).
         * 
         * @type {FirebaseConfig}
         */
        options:FirebaseConfig;
        /**
         * Gets the Firebase Auth Service object for an App.
         * 
         * @returns {Auth}  
         */
        auth():Auth;
        /**
         * Access the Database service from an App instance.
         * 
         * @returns {Database} 
         */
        database():Database;

        /**
         * Access the Storage service from an App instance.
         * 
         * @returns {FirebaseStorage}
         */
        storage():FirebaseStorage;
        /**
         * Make the given App unusable and free the resources of all associated services.
         */
        delete():Promise<void>;
    }
  
}

declare module "firebase" {
    export = firebase
}
