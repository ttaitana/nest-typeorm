import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BookingService } from './booking.service';
import { Booking } from './entities/booking.entity';

describe('BookingService', () => {
  let service: BookingService;
  const mockBookingRepository = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest
      .fn()
      .mockImplementation((booking) =>
        Promise.resolve({ id: Date.now(), ...booking }),
      ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingService,
        {
          provide: getRepositoryToken(Booking),
          useValue: mockBookingRepository,
        },
      ],
    }).compile();

    service = module.get<BookingService>(BookingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create new booking and return that.', async () => {
    const dto = {
      hotelName: 'HODHotel',
      roomNumber: 'P-012',
      name: 'Tanachai',
      bookingDate: new Date(Date.now()),
    };
    expect(await service.create(dto)).toEqual({
      id: expect.any(Number),
      ...dto,
    });
  });
});
