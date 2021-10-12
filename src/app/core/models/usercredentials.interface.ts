export interface UserCredentials{
    email:string;
    tokens:{
        _id:string,
        token:string
    }[]
}