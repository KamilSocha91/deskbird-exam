import { UserDbService } from 'src/db/services/user-db.service';
import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/db/entity/user';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly userDbService: UserDbService) {}

  async create(createUserDto: UserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = await this.userDbService.create({
      ...createUserDto,
      password: hashedPassword,
    });
    return user;
  }

  async update(updateUserDto: UserDto): Promise<[number]> {
    const user = await this.userDbService.findByPk(updateUserDto.id);
    if (!user) {
      throw new Error('User not found');
    }

    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    const updatedUser = await this.userDbService.update({
      ...user,
      ...updateUserDto,
    });

    return updatedUser;
  }

  async findAll(): Promise<User[]> {
    return this.userDbService.findAll();
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.userDbService.findOne({ where: { username } });
  }
}
