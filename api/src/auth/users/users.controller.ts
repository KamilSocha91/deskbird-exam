import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { ApiResponse, ApiBody } from '@nestjs/swagger';
import { UserDto } from 'src/dto/user.dto';
import { UsersService } from './users.service';
import { RolesGuard } from 'src/guards/roles.guard';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @UseGuards(RolesGuard)
  @Post('update')
  @ApiBody({ type: UserDto })
  @ApiResponse({ status: 200, description: 'User updated successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  updateUser(@Body() userDto: UserDto) {
    return this.usersService.update(userDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiResponse({ status: 200, description: 'List of users retrieved successfully.' })
  getUsers() {
    return this.usersService.findAll();
  }
}
