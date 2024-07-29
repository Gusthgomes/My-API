import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-dto-user';
import { UpdatePutUserDTO } from './dto/update-dto-put-user';
import { UpdatePatchUserDTO } from './dto/update-dto-patch-user';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() { email, name, password }: CreateUserDTO) {
    return { email, name, password };
  }

  @Get()
  async read() {
    return { users: ['gustavo', 'alice', 'lola'] };
  }

  @Get(':id')
  async readOne(@Param() params) {
    return { user: {}, params };
  }

  @Put(':id')
  async update(
    @Body() { email, name, password }: UpdatePutUserDTO,
    @Param() params,
  ) {
    return { method: 'put', email, name, password, params };
  }

  @Patch(':id')
  async updatePartial(
    @Body() { email, name, password }: UpdatePatchUserDTO,
    @Param() params,
  ) {
    return { method: 'patch', email, name, password, params };
  }

  @Delete(':id')
  async delete(@Param() params) {
    return { method: 'delete', params };
  }
}
