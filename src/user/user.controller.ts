import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-dto-user';
import { UpdatePutUserDTO } from './dto/update-dto-put-user';
import { UpdatePatchUserDTO } from './dto/update-dto-patch-user';
import { UserService } from './user.service';
import { LogInterceptor } from 'src/interceptors/log.interceptor';
import { ParamId } from 'src/decorators/param-id-decorator';
import { RolesDecorator } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enums';
import { RoleGuard } from 'src/guards/Role.Guard';
import { AuthGuard } from 'src/guards/Auth.Guard';

@UseGuards(AuthGuard, RoleGuard)
@UseInterceptors(LogInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @RolesDecorator(Role.Admin)
  @Post()
  async create(@Body() data: CreateUserDTO) {
    return this.userService.create(data);
  }

  @RolesDecorator(Role.Admin)
  @Get()
  async list() {
    return this.userService.list();
  }

  @RolesDecorator(Role.Admin)
  @Get(':id')
  async show(@ParamId() id: number) {
    return this.userService.show(id);
  }

  @RolesDecorator(Role.Admin)
  @Put(':id')
  async update(@Body() data: UpdatePutUserDTO, @ParamId() id: number) {
    return this.userService.update(id, data);
  }

  @RolesDecorator(Role.Admin)
  @Patch(':id')
  async updatePartial(@Body() data: UpdatePatchUserDTO, @ParamId() id: number) {
    return this.userService.updatePartial(id, data);
  }

  @RolesDecorator(Role.Admin)
  @Delete(':id')
  async delete(@ParamId() id: number) {
    return this.userService.delete(id);
  }
}
