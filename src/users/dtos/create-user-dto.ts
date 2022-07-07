import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { UserEntity } from '../entities/user.entity';
import { UserOutput } from './user.dto';

@InputType()
export class CreateUserInput extends OmitType(
  UserEntity,
  ['id', 'isVerified', 'createdAt', 'updatedAt'],
  InputType,
) {}

@ObjectType()
export class CreateUserOutput extends CoreOutput {
  @Field(() => UserOutput, { nullable: true })
  user?: UserOutput;
}
