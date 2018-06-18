export class Rating {
    ServiceId: number
    AppUserId: number
    Grade: number

    constructor(serviceId:number, appuserId:number, grade: number){
        this.ServiceId = serviceId;
        this.AppUserId = appuserId;
        this.Grade = grade;
    }
}