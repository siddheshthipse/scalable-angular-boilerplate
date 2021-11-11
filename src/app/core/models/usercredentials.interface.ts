export interface UserCredentials{
    email:string;
    setting:any;
    _id:string;
    tokens:{
        _id:string,
        token:string
    }[]
}