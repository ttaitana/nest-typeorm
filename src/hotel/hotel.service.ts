import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { Hotel } from './entities/hotel.entity';

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(Hotel) private hotelRepository: Repository<Hotel>,
  ) {}

  async create(createHotelDto: CreateHotelDto) {
    const booking = await this.hotelRepository.create(createHotelDto);
    return this.hotelRepository.save(booking);
  }

  findAll() {
    return this.hotelRepository.find({ relations: ['booking'] });
  }

  async findOne(id: number) {
    try {
      const hotel = await this.hotelRepository.findOneOrFail(id);
      return hotel;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, updateHotelDto: UpdateHotelDto) {
    const hotel = await this.findOne(id);
    return this.hotelRepository.save({
      ...hotel,
      ...updateHotelDto,
    });
  }

  async remove(id: number) {
    const hotel = await this.findOne(id);
    return this.hotelRepository.remove(hotel);
  }
}
