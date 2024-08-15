import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: '|8*`Y28]k079(F~B^3l.(D`O>1()Zxok',
    }),
  ],
})
export class AuthModule {}
