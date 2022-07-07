import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { UserEntity } from '../entities/user.entity';
import { UserOutput } from './user.dto';

@InputType()
export class UpdateUserInput extends PartialType(UserEntity, InputType) {}

@ObjectType()
export class UpdateUserOutput extends CoreOutput {
  @Field((type) => UserOutput, { nullable: true })
  user?: UserOutput;
}
