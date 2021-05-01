import { IsDate, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookingDto {
  @ApiProperty()
  @IsNumber()
  hotelId: number;

  @ApiProperty()
  @IsString()
  roomNumber: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  bookingDate: string;
}
