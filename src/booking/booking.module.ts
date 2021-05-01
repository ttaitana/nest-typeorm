import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Hotel } from 'src/hotel/entities/hotel.entity';
import { HotelModule } from 'src/hotel/hotel.module';

@Module({
  imports: [TypeOrmModule.forFeature([Booking, Hotel]), HotelModule],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
