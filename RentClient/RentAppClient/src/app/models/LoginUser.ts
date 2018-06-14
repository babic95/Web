export interface LoginUser {
    username: string; // required, must be 5-15 characters
    password: string; // required, value must be equal to confirm password.
}