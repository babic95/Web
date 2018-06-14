export class Service {
    Id: number;
    Name: string; 
    Email: string; 
    Description: string;
    Logo: string;

    constructor(id: number, name:string, email:string, description: string, logo: string){
        this.Id = id;
        this.Name = name;
        this.Email = email;
        this.Description = description;
        this.Logo = logo;
    }
}