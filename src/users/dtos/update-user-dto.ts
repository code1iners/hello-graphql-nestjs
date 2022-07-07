import { InputType, PartialType } from '@nestjs/graphql';
import { UserEntity } from '../entities/user.entity';

@InputType()
export class UpdateUserInput extends PartialType(UserEntity, InputType) {}
