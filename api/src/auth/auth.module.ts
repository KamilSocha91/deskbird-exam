import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DbModule } from 'src/db/db.module';
import { UsersService } from 'src/auth/users/users.service';
import { UsersController } from './users/users.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/db/entity/user';
import { jwtConstants } from './constants';

@Module({
  imports: [
    DbModule,
    SequelizeModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [UsersService, AuthService, JwtService],
  controllers: [UsersController, AuthController],
})
export class AuthModule {}
// curl -X POST http://localhost:3000/auth/login -d '{"username": "admin", "password": "adminpassword"}' -H "Content-Type: application/json" {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}
