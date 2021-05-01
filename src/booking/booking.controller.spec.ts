import { Test, TestingModule } from '@nestjs/testing';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

describe('BookingController', () => {
  let controller: BookingController;

  const mockupBookingService = {
    create: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
    update: jest.fn().mockImplementation((id, dto) => ({
      id,
      ...dto,
    })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingController],
      providers: [BookingService],
    })
      .overrideProvider(BookingService)
      .useValue(mockupBookingService)
      .compile();

    controller = module.get<BookingController>(BookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create booking', () => {
    const dto = {
      hotelId: 1,
      roomNumber: 'P-012',
      name: 'Tanachai',
      bookingDate: new Date(Date.now()),
    };
    expect(controller.create(dto)).toEqual({
      id: expect.any(Number),
      ...dto,
    });
  });

  it('should update booking', () => {
    const dto = {
      hotelId: 1,
      roomNumber: 'P-011',
      name: 'Tanachai Saetung',
      bookingDate: new Date(Date.now()),
    };
    expect(controller.update('1', dto)).toEqual({
      id: 1,
      ...dto,
    });
    expect(mockupBookingService.update).toHaveBeenCalled();
  });
});
