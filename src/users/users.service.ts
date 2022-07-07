import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { RepositoriesService } from 'src/repositories/repositories.service';
import { CreateUserInput } from './dtos/create-user-dto';
import { UpdateUserInput } from './dtos/update-user-dto';

@Injectable()
export class UsersService {
  constructor(private readonly repository: RepositoriesService) {}

  async getUsers(): Promise<User[] | undefined> {
    try {
      return this.repository.user.findMany();
    } catch (error) {
      console.error('[getUsers]', error);
    }
  }

  async createUser(input: CreateUserInput): Promise<User | undefined> {
    try {
      return this.repository.user.create({
        data: { ...input },
      });
    } catch (error) {
      console.error('[createUser]', error);
    }
  }

  async updateUser(input: UpdateUserInput): Promise<User | undefined> {
    try {
      const copiedInput = { ...input };
      delete copiedInput.id;

      return this.repository.user.update({
        where: { id: +input.id },
        data: { ...copiedInput },
      });
    } catch (error) {
      console.error('[updateUser]', error);
    }
  }
}
