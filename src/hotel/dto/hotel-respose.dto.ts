import { IsNumber, IsObject, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BookingResponseDto } from 'src/booking/dto/booking-response.dto';

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
