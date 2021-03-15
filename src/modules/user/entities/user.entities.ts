import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({
    example: 'Maine Coon',
    description: 'First name of user',
  })
  name: string;

  @ApiProperty({ example: 1, description: 'The age of the User' })
  age: number;

  @ApiProperty({
    example: 'Maine Coon',
    description: 'Last name of user',
  })
  lastName: string;
}
