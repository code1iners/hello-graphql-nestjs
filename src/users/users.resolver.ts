import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput, CreateUserOutput } from './dtos/create-user-dto';
import { UpdateUserInput, UpdateUserOutput } from './dtos/update-user-dto';
import { UserResponse } from './dtos/user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver((of) => UserEntity)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query((returns) => UserResponse)
  async getUsers(): Promise<UserResponse> {
    const users = await this.usersService.getUsers();
    if (!users) throw new Error('Failed getting users.');

    return {
      ok: true,
      users,
    };
  }

  @Mutation((returns) => CreateUserOutput)
  async createUser(
    @Args('input') input: CreateUserInput,
  ): Promise<CreateUserOutput> {
    try {
      const user = await this.usersService.createUser(input);
      if (!user) throw new Error('Failed create the user.');

      return {
        ok: true,
        user,
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }

  @Mutation((returns) => UpdateUserOutput)
  async updateUser(
    @Args('input') input: UpdateUserInput,
  ): Promise<UpdateUserOutput> {
    try {
      const user = await this.usersService.updateUser(input);
      if (!user) throw new Error('Failed update the user.');

      return {
        ok: true,
        user,
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }
}
