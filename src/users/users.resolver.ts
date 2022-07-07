import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dtos/create-user-dto';
import { UpdateUserInput } from './dtos/update-user-dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver((of) => UserEntity)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query((returns) => [UserEntity])
  async getUsers(): Promise<UserEntity[]> {
    return await this.usersService.getUsers();
  }

  @Mutation(() => UserEntity)
  async createUser(@Args('input') input: CreateUserInput): Promise<UserEntity> {
    return this.usersService.createUser(input);
  }

  @Mutation(() => UserEntity)
  async updateUser(@Args('input') input: UpdateUserInput): Promise<UserEntity> {
    return this.usersService.updateUser(input);
  }
}
