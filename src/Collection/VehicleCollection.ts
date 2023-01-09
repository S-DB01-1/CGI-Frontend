import VehicleDALMemory from "@/DAL/VehicleDALMemory";
import type {VehicleDTO} from "@/DTO/VehicleDTO";
import Vehicle from "@/Model/Vehicle";

export default class VehicleCollection {
    async Create(name: string, emissionPerKM: number) {
        // create van dal aanroepen, dto als result
        // dto naar object returnen

        const dto: VehicleDTO = await new VehicleDALMemory().Create(name, emissionPerKM);
        return new Vehicle(dto.ID, dto.Name, dto.EmissionPerKM);
    }

    async ReadAll() {
        const output = await new VehicleDALMemory().Read();

        const vehicles = [];
        for (const dto of output as VehicleDTO[]) {
            vehicles.push(new Vehicle(dto.ID, dto.Name, dto.EmissionPerKM))
        }

        return vehicles;
    }

    async Get(id: number) {
        const dto: VehicleDTO = await new VehicleDALMemory().Get(id);
        return new Vehicle(dto.ID, dto.Name, dto.EmissionPerKM);
    }

    async Update(name: string, emissionPerKM: number) {
        const dto: VehicleDTO = await new VehicleDALMemory().Update(name, emissionPerKM);
        return new Vehicle(dto.ID, dto.Name, dto.EmissionPerKM);
    }

    async Delete(id: number) {
        await new VehicleDALMemory().Delete(id);
    }
}