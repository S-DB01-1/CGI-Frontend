export class VechicleDTO {
    ID: number;
    Name: string;
    EmmisionPerKm: number;

    constructor(id: number, name: string, emmisionPerKm: number) {
        this.ID = id;
        this.Name = name;
        this.EmmisionPerKm = emmisionPerKm;
    }
  }