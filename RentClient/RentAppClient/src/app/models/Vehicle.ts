export class Vehicle {
    ServiceId: number;
    TypeVehicle: string; 
    Producer: string; 
    Model: string;
    Pictures: string;
    Description: string;
    ProductionDate: string;
    
    constructor(serviceId: number, typeVehicle: string, producer:string, model: string, pictures: string, 
        description: string, productionDate: string){
        this.ServiceId = serviceId;
        this.TypeVehicle = typeVehicle;
        this.Producer = producer;
        this.Model = model;
        this.Pictures = pictures;
        this.Description = description;
        this.ProductionDate = productionDate;
    }
}