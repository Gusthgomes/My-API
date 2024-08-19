import { Body, Controller, Post } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-dto-login';
import { AuthRegisterDto } from './dto/auth-dto-register';
import { AuthForgetDto } from './dto/auth-dto-forget';
import { AuthResetDto } from './dto/auth-dto-reset';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { AuthMeDto } from './dto/auth-dto-me';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() { email, password }: AuthLoginDto) {
    return this.authService.login(email, password);
  }

  @Post('register')
  async register(@Body() body: AuthRegisterDto) {
    return this.authService.register(body);
  }

  @Post('forget')
  async forget(@Body() body: AuthForgetDto) {
    return this.authService.forget(body.email);
  }

  @Post('reset')
  async reset(@Body() { password, token }: AuthResetDto) {
    return this.authService.reset(password, token);
  }

  @Post('me')
  async me(@Body() body: AuthMeDto) {
    return this.authService.checkToken(body.token);
  }
}
