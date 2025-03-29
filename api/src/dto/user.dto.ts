import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ readOnly: true })
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  role: string;

  // constructor(dto?: User | any) {
  //   this.id = dto.id ? dto.id : undefined;
  //   this.userName = dto.firstName ? dto.firstName : undefined;
  //   this.email = dto.email ? dto.email : undefined;
  //   this.password = dto.password ? dto.password : undefined;
  // }
}
