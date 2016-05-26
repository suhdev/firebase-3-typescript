///<reference path="./es6-promise.d.ts"/>

declare namespace firebase {
	export interface FirebaseConfig{
        apiKey:string;
        authDomain:string;
        databaseURL:string;
        storageBucket:string;
    }
    
    var apps:FirebaseApplication[];
    
    export function initializeApp(config:FirebaseConfig,
        name?:string):FirebaseApplication;
    export function storage():FirebaseStorage;
        
    export interface UserInfo {
        displayName:string;
        email:string;
        photoURL:string;
        providerId:string;
        uid:string;
    }
    
    export interface SettableMetadata{
        cacheControl:string;
        contentDisposition:string;
        contentEncoding:string;
        contentLanguage:string;
        contentType:string;
        customMetadata:any;
    }
    
    export interface FullMetadata extends SettableMetadata{
        bucket:string;
        downloadURLs:string[];
        fullPath:string;
        generation:string;
        md5Hash:string;
        metageneration:string;
        name:string;
        size:number;
        timeCreated:string;
        updated:string;
        
    }
    
    export enum TaskEvent {
        STATE_CHANGED
    }
    
    
    
    export enum TaskState {
        RUNNING,
        PAUSED,
        SUCCESS,
        CANCELED,
        ERROR
    }
    
    export interface UploadTaskSnapshot{
        bytesTransferred:number;
        downloadURL:string;
        metadata:FullMetadata;
        ref:StorageReference;
        state:TaskState;
        task:UploadTask;
        totalBytes:number;
    }
    
    export interface Observer {
        next?:Function;
        error?:Function;
        complete?:Function;
    }
    
    export interface SubscribeFn{
        (next?:Function,error?:Function,complete?:Function):void;
    }    
    
    export interface UnsubscribeFn{
        ():void;
    }
    
    export interface UploadMetadata extends SettableMetadata{
        md5Hash:string;
    }
    
    export interface UploadTask{
        snapshot:UploadTaskSnapshot;
        cancel():boolean;
        on(eventType:string,nextOrObserver?:Function|Observer,error?:Function,complete?:Function):SubscribeFn|UnsubscribeFn;
        pause():boolean;
        resume():boolean;
        
        
    }
    
    export interface StorageReference{
        bucket:string;
        fullPath:string;
        name:string;
        parent:StorageReference;
        root:StorageReference;
        storage:FirebaseStorage;
        child(path:string):StorageReference;
        delete():Promise<void>;
        getDownloadURL():Promise<string>;
        getMetaData():Promise<FullMetadata>;
        put(blog:Blob,metadata:UploadMetadata):UploadTask;
    }
    
    export interface FirebaseStorage{
        maxOperationRetryTime:number;
        maxUploadRetryTime:number;
        ref(path:string):StorageReference;
        refFromURL(url:string):StorageReference;
        setMaxOperationRetryTime(time:number):void;
        setMaxUploadRetryTime(time:number):void;
    }
    
    export interface AuthCredential{
        provider:string;
    }
    
    export interface UserCredential{
        user:User;
        credential:AuthCredential;
    }
    
    export interface AuthProvider {
        providerId:string;
    }
    
    export interface EmailAuthProvider extends AuthProvider {
        PROVIDER_ID:string;
        credential(email:string,password:string):AuthCredential;
    }
    
    export interface GithubAuthProider extends AuthProvider{
        new ():GithubAuthProider;
        PROVIDER_ID:string;
        addScope(scope:string):void;
        credential(token:string):AuthCredential;
    }
    
    export interface GoogleAuthProvider extends AuthProvider{
        new():GoogleAuthProvider;
        addScope(scope:string):void;
        credential(idToken:string,accessToken:string):AuthCredential;
        PROVIDER_ID:string;
    }
    
    export interface FacebookAuthProvider extends AuthProvider{
        PROVIDER_ID:string;
        addScope(scope:string):void;
        credential(token:string):AuthCredential;
    }
    
    export interface TwitterAuthProvider extends AuthProvider{
        new():TwitterAuthProvider;
        PROVIDER_ID:string;
        crendential(token:string,secret:string):AuthCredential;
    }
    
    export interface UserProfile {
        displayName:string; 
        photoURL:string;
    }
    
    export interface ActionCodeInfoData{
        email:string;
    }
    
    export interface ActionCodeInfo {
        data:ActionCodeInfoData;
    } 
        
    export interface User extends UserInfo{
        emailVerified:boolean;
        isAnonymous:boolean;
        providerData:UserInfo[];
        refreshToken:string;
        delete():Promise<void>;
        getToken(forceRefresh?:boolean):Promise<string>;
        link(credentials:AuthCredential):Promise<User>;
        linkWithPopup(provider:AuthProvider):Promise<UserCredential>;
        reauthenticate(credentil:AuthCredential):Promise<void>;
        reload():Promise<void>;
        sendEmailVerification():Promise<void>;
        unlink(providerId:string):Promise<User>;
        updateEmail(newEmail:string):Promise<void>;
        updatePassword(newPassword:string):Promise<void>;
        updateProfile(profile:UserProfile):Promise<void>;
    }
        
    export class Auth {
        app:FirebaseApplication;
        currentUser:User;
    }
    
    export interface CallbackWithError{
        (err:Error):void;
    }
    
    export interface OnDisconnect{
        cancel(onComplete:CallbackWithError):Promise<void>;
        remove(onComplete:CallbackWithError):Promise<void>;
        set(value:any,onComplete:CallbackWithError):Promise<void>;
        setWithPriority(value:any,priority:number,onComplete:CallbackWithError):Promise<void>;
        update(objectToMerge:any,onComplete:CallbackWithError):void;
        
        
    }
    
    export interface ThenableReference extends DatabaseReference,DatabaseQuery{
        
    }
    
    export interface ActionFunction{
        (snapshot:DataSnapshot):void;
    }
    
    export interface DatabaseQuery{
        endAt(value:any,key?:any):DatabaseQuery;
        equalTo(value:any,key?:any):DatabaseQuery;
        limitToFirst(limit:number):DatabaseQuery;
        limitToLast(limit:number):DatabaseQuery;
        off(eventType?:string,callback?:Function,context?:any):void;
        on(eventType:string,callback:Function,cancelCallbackOrContext?:Function|any,context?:any):Function;
        once(eventType:string,userCallback:Function):Promise<any>;
        onDisconnect():OnDisconnect;
        orderByChild(path:string):DatabaseQuery;
        orderByKey():DatabaseQuery;
        orderByPriority():DatabaseQuery;
        orderByValue():DatabaseQuery;
        push(value:any,onComplete:CallbackWithError):ThenableReference; 
        toString():string;
    }
    
    export interface DataSnapshot{
        key:string;
        ref:DatabaseReference;
        child(path:string):DataSnapshot;
        exists():boolean;
        exportVal():any;
        forEach(action:ActionFunction):boolean;
        getPriority():string|number;
        hasChild(path:string):boolean;
        hasChildren():boolean;
        numChildren():number;
        val():any;
    }
    
    export interface TransactionResult{
        committed:boolean;
        snapshot:DataSnapshot;
    }
    
    export interface DatabaseReference extends DatabaseQuery{
        key:string;
        parent:DatabaseReference; 
        ref:any;
        root:DatabaseReference;
        child(path:string):DatabaseReference;
        setPriority(priority:number,onComplete:CallbackWithError):Promise<void>;
        setWithPriority(newVal:any,newPriority:number,onComplete:CallbackWithError):Promise<void>;
        transaction(transationUpdate:any,onComplete:CallbackWithError,
        applyLocally:boolean):Promise<TransactionResult>;
        update(objectToMerge:any,onComplete:CallbackWithError):Promise<void>;
        remove(onComplete:CallbackWithError):Promise<void>;
        set(newVal:any,onComplete:CallbackWithError):Promise<void>;
        
    }
    
    export class Database {
        app:FirebaseApplication;
        goOffline():void;
        goOnline():void;
        ref(path:string):DatabaseReference;
        refFromURL(url:string):DatabaseReference;
    }
    
    export class FirebaseApplication{
        name:string;
        options:FirebaseConfig;
        auth():Auth;
        database():Database;
    }
  
}

