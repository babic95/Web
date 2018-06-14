export class LoginUser {
    username: string; // required, must be 5-15 characters
    password: string; // required, value must be equal to confirm password.
    
    constructor(username: string, password:string){
        this.username = username;
        this.password = password;
    }
}