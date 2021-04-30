import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BookingService } from './booking.service';
import { BookingResponseDto } from './dto/booking-response.dto';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@ApiTags('Booking')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @ApiOkResponse({ type: BookingResponseDto })
  create(
    @Body() createBookingDto: CreateBookingDto,
  ): Promise<BookingResponseDto> {
    return this.bookingService.create(createBookingDto);
  }

  @Get()
  @ApiOkResponse({ type: BookingResponseDto })
  findAll(): Promise<BookingResponseDto[]> {
    return this.bookingService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: BookingResponseDto })
  findOne(@Param('id') id: string): Promise<BookingResponseDto> {
    return this.bookingService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: BookingResponseDto })
  update(
    @Param('id') id: string,
    @Body() updateBookingDto: UpdateBookingDto,
  ): Promise<BookingResponseDto> {
    return this.bookingService.update(+id, updateBookingDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: BookingResponseDto })
  remove(@Param('id') id: string): Promise<BookingResponseDto> {
    return this.bookingService.remove(+id);
  }
}
