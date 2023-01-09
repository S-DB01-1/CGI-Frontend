import type {UserDTO} from "@/DTO/UserDTO";
import UserDALMemory from "@/DAL/UserDALMemory";
import User from "@/Model/User";

export default class UserCollection {
    async Create(name: string, email: string) {
        // create van dal aanroepen, dto als result
        // dto naar object returnen
        const dto: UserDTO = await new UserDALMemory().Create(name, email)
        return new User(dto.ID, dto.Email, dto.Email);
    }

    async ReadAll() {
        const output = await new UserDALMemory().Read();

        const users = [];
        for (const dto of output as UserDTO[]) {
            users.push(new User(dto.ID, dto.Name, dto.Email));
        }

        return users;
    }

    async Get(id: number) {
        const dto: UserDTO = await new UserDALMemory().Get(id);
        return new User(dto.ID, dto.Email, dto.Email);
    }

    async Update(name: string, email: string) {
        // create van dal aanroepen, dto als result
        // dto naar object returnen
        const dto: UserDTO = await new UserDALMemory().Update(name, email)
        return new User(dto.ID, dto.Email, dto.Email);
    }

    async Delete(id: number) {
        await new UserDALMemory().Delete(id);
    }
}