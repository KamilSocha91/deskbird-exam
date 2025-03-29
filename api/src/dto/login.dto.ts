import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @ApiProperty()
  @ApiProperty({ example: 'john' })
  @ApiProperty({ description: 'The username of the user' })
  username: string;

  @IsString()
  @ApiProperty()
  @ApiProperty({ example: '' })
  @ApiProperty({ description: 'The password of the user' })
  password: string;
}
