import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
import config from '../ormconfing';
import { Booking } from './booking/entities/booking.entity';
import { HotelModule } from './hotel/hotel.module';
@Module({
  imports: [TypeOrmModule.forRoot(config), BookingModule, HotelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
