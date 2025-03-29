import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/auth/users/users.service';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/db/entity/user';
import { LoginDto } from 'src/dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<Partial<User> | null> {
    const user = await this.usersService.findByUsername(username);
    if (!user) {
      return null;
    }
    const isPasswordValid = await bcrypt.compare(password, user.dataValues.password);
    if (isPasswordValid) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(login: LoginDto): Promise<{ access_token: string }> {
    const user = await this.validateUser(login.username, login.password);
    if (!user) {
      throw new UnauthorizedException('User does not exist');
    }

    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload, { secret: 'test' }),
    };
  }
}
