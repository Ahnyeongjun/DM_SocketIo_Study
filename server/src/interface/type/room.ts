import { User } from "../../db/entity";

export interface CreateRoomRequest {
    creater: string;
    name: string;
}
export interface RoomRequest {
    creater: string;
    name: string;
    member: User[];
}
