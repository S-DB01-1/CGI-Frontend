export class TripDTO {
    ID: number;
    UserID: number;
    Date: string;
    TotalEmmision: number;

    constructor(id: number, userID: number, date: string, totalEmmision: number) {
        this.ID = id;
        this.UserID = userID;
        this.Date = date;
        this.TotalEmmision = totalEmmision;
    }
  }