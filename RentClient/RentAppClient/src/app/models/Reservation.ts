export class Reservation {
    Id: number;
    DateRezervation: Date;
    ReturnDate: Date;
    FirstBranchOfficeId: number;
    SecundBranchOfficeId: number;
    VehicleId: number;

    constructor(start: Date, end: Date, branch1Id: number, branch2Id: number, vehicleId: number) {
        this.DateRezervation = start;
        this.ReturnDate = end; 
        this.FirstBranchOfficeId = branch1Id;
        this.SecundBranchOfficeId = branch2Id;
        this.VehicleId = vehicleId;
    }
}