import { Field, ObjectType, OmitType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { UserEntity } from '../entities/user.entity';

@ObjectType()
export class UserOutput extends OmitType(UserEntity, ['password']) {}

@ObjectType()
export class UserResponse extends CoreOutput {
  @Field(() => [UserOutput], { nullable: true })
  users?: UserOutput[];
}
