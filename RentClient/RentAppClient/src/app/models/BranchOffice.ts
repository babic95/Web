export class BranchOffice {
    ServiceId: number;
    X: number;
    Y: number;
    Addres: string;
    Picture: string;
    
    constructor(serviceId: number, x: number, y:number, addres: string, picture: string){
        this.ServiceId = serviceId;
        this.X = x;
        this.Y = y;
        this.Addres = addres;
        this.Picture = picture;
    }
}