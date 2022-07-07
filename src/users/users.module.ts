import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/repositories/repositories.module';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [RepositoriesModule],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
