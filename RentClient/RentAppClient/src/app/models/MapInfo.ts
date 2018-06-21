export class MapInfo {
    IconUrl: string;
    Title: string;
    Label: string;
    CenterLat: number;
    CenterLong: number;
    Link: string;

    constructor(lat: number, long: number, icon: string, title:string, label:string, link: string){
        this.IconUrl = icon;
        this.Title = title;
        this.Label = label;
        this.CenterLat = lat;
        this.CenterLong = long;
        this.Link = link;
    }
} 