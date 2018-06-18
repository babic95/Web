export class Service {
    Id: number;
    Name: string; 
    Email: string; 
    Description: string;
    Logo: string;
    AppUserId: number;

    constructor(id: number, name:string, email:string, description: string, logo: string, appUserId: number){
        this.Id = id;
        this.Name = name;
        this.Email = email;
        this.Description = description;
        this.Logo = logo;
        this.AppUserId = appUserId;
    }
}