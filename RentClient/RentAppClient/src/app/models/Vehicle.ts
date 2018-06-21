export class Vehicle {
    Id: number;
    ServiceId: number;
    TypeVehicle: string; 
    Producer: string; 
    Model: string;
    Pictures: string;
    Picture: string;
    Description: string;
    ProductionDate: Date;
    Pirce: number;
    
    constructor(serviceId: number, typeVehicle: string, producer:string, model: string, pictures: string, picture: string, 
        description: string, productionDate: Date, pirce: number){
        this.ServiceId = serviceId;
        this.TypeVehicle = typeVehicle;
        this.Producer = producer;
        this.Model = model;
        this.Pictures = pictures;
        this.Picture = picture;
        this.Description = description;
        this.ProductionDate = productionDate;
        this.Pirce = pirce;
    }
}