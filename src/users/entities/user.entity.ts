import { Field, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/core/entities/core.entity';

@ObjectType()
export class UserEntity extends CoreEntity {
  @Field(() => String)
  email: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;

  @Field(() => Boolean)
  isVerified: boolean;
}
