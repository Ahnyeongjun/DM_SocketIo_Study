import { UserRepository } from '../../db/repository';
import { CreateUserRequest } from '../../interface';
import { cryptoPassword } from '../../lib';

export class AuthService {
    constructor(private readonly userRepository: UserRepository) { }

    public async createUser(request: CreateUserRequest) {
        await this.userRepository.createByUser(request.name, request.id, await cryptoPassword(request.password));
    }

    public async findOneByName(name: string) {
        return await this.userRepository.findOneByName(name);
    }

    public async login(request: CreateUserRequest) {
        return await this.userRepository.findOneByIdAndPassword(request.id, await cryptoPassword(request.password));
    }
}
