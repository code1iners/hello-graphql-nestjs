import { InputType, OmitType } from '@nestjs/graphql';
import { UserEntity } from '../entities/user.entity';

@InputType()
export class CreateUserInput extends OmitType(
  UserEntity,
  ['id', 'isVerified', 'createdAt', 'updatedAt'],
  InputType,
) {}
