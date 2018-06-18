export class Comment {
    ServiceId: number;
    AppUserId: number;
    Description: string;
    CommentDate: string;
    FullNameUser: string;
    
    constructor(serviceId: number, appUserId:number, description: string, commentDate: string, fullNameUser: string){
        this.ServiceId = serviceId;
        this.AppUserId = name;
        this.Description = description;
        this.CommentDate = commentDate;
        this.FullNameUser = fullNameUser;
    }
}