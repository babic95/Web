export class BranchOffice {
    Id: number;
    ServiceId: number;
    X: number;
    Y: number;
    Addres: string;
    Picture: string;
    
    constructor(serviceId: number, x: number, y:number, address: string, picture: string){
        this.ServiceId = serviceId;
        this.X = x;
        this.Y = y;
        this.Addres = address;
        this.Picture = picture;
    }
}