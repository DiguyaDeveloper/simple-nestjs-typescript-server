import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../../dto/user.dto';
import { User } from '../../entities/user.entities';
import { UserService } from '../../services/user.service';

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found User',
    type: User,
  })
  findOne(@Param('id') id: string): User {
    return this.userService.findOne(+id);
  }
}
