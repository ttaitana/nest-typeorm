import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { HotelResponseDto } from './dto/hotel-respose.dto';

@ApiTags('Hotel')
@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @ApiOkResponse({ type: HotelResponseDto })
  @Post()
  create(@Body() createHotelDto: CreateHotelDto): Promise<HotelResponseDto> {
    return this.hotelService.create(createHotelDto);
  }

  @ApiOkResponse({ type: [HotelResponseDto] })
  @Get()
  findAll(): Promise<HotelResponseDto[]> {
    return this.hotelService.findAll();
  }

  @ApiOkResponse({ type: HotelResponseDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<HotelResponseDto> {
    return this.hotelService.findOne(+id);
  }

  @ApiOkResponse({ type: HotelResponseDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHotelDto: UpdateHotelDto,
  ): Promise<HotelResponseDto> {
    return this.hotelService.update(+id, updateHotelDto);
  }

  @ApiOkResponse({ type: HotelResponseDto })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<HotelResponseDto> {
    return this.hotelService.remove(+id);
  }
}
