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
  async update(@Body() body, @Param() params) {
    return { method: 'put', body, params };
  }

  @Patch(':id')
  async updatePartial(@Body() body, @Param() params) {
    return { method: 'patch', body, params };
  }

  @Delete(':id')
  async delete(@Param() params) {
    return { method: 'delete', params };
  }
}
