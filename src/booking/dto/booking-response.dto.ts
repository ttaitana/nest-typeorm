import { IsDate, IsNumber, IsObject, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { HotelResponseDto } from 'src/hotel/dto/hotel-respose.dto';

export class BookingResponseDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty({ type: HotelResponseDto })
  @IsObject()
  hotel: HotelResponseDto;

  @ApiProperty()
  @IsString()
  roomNumber: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  // @IsDate()
  @IsString()
  bookingDate: string;
}
