import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class HotelResponseDto {
  @ApiProperty()
  @IsNumber()
  hotelId: number;

  @ApiProperty()
  @IsString()
  hotelName: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  email: string;
}
