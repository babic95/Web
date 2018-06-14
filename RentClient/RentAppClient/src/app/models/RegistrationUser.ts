export class RegistrationUser {
    FullName: string; // required, must be 5-8 characters
    Email: string; // required, must be valid email format
    Password: string; // required, value must be equal to confirm password.
    ConfirmPassword: string; // required, value must be equal to password. 
    Birthday: string; // required, value must be equal to password. 

    constructor(fullName: string, email:string, password:string, confirmPassword: string, date: string){
        this.FullName = fullName;
        this.Email = email;
        this.Password = password;
        this.ConfirmPassword = confirmPassword;
        this.Birthday = date;
    }
}