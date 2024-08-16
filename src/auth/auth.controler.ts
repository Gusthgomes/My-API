import { Body, Controller, Post } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-dto-login';
import { AuthRegisterDto } from './dto/auth-dto-register';
import { AuthForgetDto } from './dto/auth-dto-forget';
import { AuthResetDto } from './dto/auth-dto-reset';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() body: AuthLoginDto) {}

  @Post('register')
  async register(@Body() body: AuthRegisterDto) {
    return this.userService.create(body);
  }

  @Post('forget')
  async forget(@Body() body: AuthForgetDto) {}

  @Post('reset')
  async reset(@Body() body: AuthResetDto) {}
}
