import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HotelService } from 'src/hotel/hotel.service';
import { Repository } from 'typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './entities/booking.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking) private bookingRepository: Repository<Booking>,
    private hotelService: HotelService,
  ) {}

  async create(createBookingDto: CreateBookingDto) {
    const hotel = await this.hotelService.findOne(createBookingDto.hotelId);
    const booking = await this.bookingRepository.create(createBookingDto);
    booking.hotel = hotel;
    return this.bookingRepository.save(booking);
  }

  findAll() {
    return this.bookingRepository.find({ relations: ['hotel'] });
  }

  async findOne(id: number) {
    try {
      const booking = await this.bookingRepository.findOneOrFail(id, {
        relations: ['hotel'],
      });
      return booking;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, updateBookingDto: UpdateBookingDto) {
    const booking = await this.findOne(id);
    return this.bookingRepository.save({
      ...booking,
      ...updateBookingDto,
    });
  }

  async remove(id: number) {
    const booking = await this.findOne(id);
    return this.bookingRepository.remove(booking);
  }
}
