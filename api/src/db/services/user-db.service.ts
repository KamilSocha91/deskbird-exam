import { Inject, Injectable } from '@nestjs/common';
import { ModelCtor } from 'sequelize-typescript';
import { User, UserCreationAttributes } from '../entity/user';
import { DestroyOptions, FindOptions, Transaction } from 'sequelize';
import { UserDto } from 'src/dto/user.dto';

@Injectable()
export class UserDbService {
  constructor(
    @Inject('DB_REPOSITORY-USER')
    protected readonly dbService: ModelCtor<User>,
  ) {}

  async create(data: UserCreationAttributes, transaction?: Transaction): Promise<User> {
    return this.dbService.create(data, { transaction });
  }

  async update(data: UserDto, transaction?: Transaction): Promise<[number]> {
    return this.dbService.update(data, {
      where: {
        id: data.id,
      },
      transaction,
    });
  }

  async findAll(options?: FindOptions): Promise<User[]> {
    return this.dbService.findAll(options);
  }

  async findByPk(id: number): Promise<User | null> {
    return this.dbService.findByPk(id);
  }

  async findOne(options: FindOptions): Promise<User | null> {
    return this.dbService.findOne(options);
  }

  async destroy(options: DestroyOptions): Promise<number> {
    return this.dbService.destroy(options);
  }
}
