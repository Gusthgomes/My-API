import {
  Body,
  Controller,
  Post,
  Headers,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-dto-login';
import { AuthRegisterDto } from './dto/auth-dto-register';
import { AuthForgetDto } from './dto/auth-dto-forget';
import { AuthResetDto } from './dto/auth-dto-reset';
import { AuthService } from './auth.service';
import { AuthGuard } from 'src/guards/Auth.Guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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

  @UseGuards(AuthGuard)
  @Post('me')
  async me(@Req() req) {
    return { me: 'OK', data: req.tokenPayload };
  }
}
