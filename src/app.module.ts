import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CoreModule } from './core/core.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    UsersModule,
    CoreModule,
    RepositoriesModule,
  ],
})
export class AppModule {}
