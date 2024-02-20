export interface IUser{
    id?:string,
    email:string;
}

export interface AuthState{
    user: IUser | null,
    isAuthenticated:boolean;
    expired?:boolean;
}

export interface LoginPayload{
    email:string;
    password:string;
}