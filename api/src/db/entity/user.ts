import { AllowNull, Column, DataType, Model, Table } from 'sequelize-typescript';

export interface UserCreationAttributes {
  username: string;
  password: string;
  role: string;
}

@Table({
  tableName: 'users',
  paranoid: true,
})
export class User extends Model<User, UserCreationAttributes> {
  @AllowNull(false)
  @Column({ unique: true })
  username: string;

  @Column(DataType.STRING(50))
  password: string;

  @Column({ defaultValue: 'user' })
  role: string;
}
