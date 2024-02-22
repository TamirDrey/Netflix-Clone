export interface IUser{
    _id?:string,
    name?:string,
    email:string;
}

export interface AuthState{
    user: IUser | null,
    isAuthenticated:boolean;
}

export interface LoginPayload{
    email:string;
    password:string;
}