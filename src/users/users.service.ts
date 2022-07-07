import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { RepositoriesService } from 'src/repositories/repositories.service';
import { CreateUserInput } from './dtos/create-user-dto';
import { UpdateUserInput } from './dtos/update-user-dto';

@Injectable()
export class UsersService {
  constructor(private readonly repository: RepositoriesService) {}

  async getUsers(): Promise<User[]> {
    return this.repository.user.findMany();
  }

  async createUser(input: CreateUserInput): Promise<User> {
    return this.repository.user.create({
      data: { ...input },
    });
  }

  async updateUser(input: UpdateUserInput): Promise<User> {
    return this.repository.user.update({
      where: { id: input.id },
      data: { ...input },
    });
  }
}
