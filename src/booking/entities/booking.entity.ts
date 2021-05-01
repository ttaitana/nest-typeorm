import { Hotel } from 'src/hotel/entities/hotel.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roomNumber: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  bookingDate: string;

  @ManyToOne((type) => Hotel, (hotel) => hotel.booking)
  hotel: Hotel;
}
