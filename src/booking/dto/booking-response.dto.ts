import { IsDate, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Hotel } from 'src/hotel/entities/hotel.entity';

export class BookingResponseDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  hotel: Hotel;

  @ApiProperty()
  @IsString()
  roomNumber: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsDate()
  bookingDate: Date;
}
