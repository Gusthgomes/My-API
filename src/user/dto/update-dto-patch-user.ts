import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './create-dto-user';

export class UpdatePatchUserDTO extends PartialType(CreateUserDTO) {}
