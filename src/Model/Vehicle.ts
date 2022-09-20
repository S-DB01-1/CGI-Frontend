export default class Vehicle {
  ID: number;
  Name: string;
  EmissionPerKM: number;

  constructor(id: number, name: string, emissionPerKM: number) {
    this.ID = id;
    this.Name = name;
    this.EmissionPerKM = emissionPerKM
  }
}
