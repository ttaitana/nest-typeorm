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

  @Column({ type: 'timestamp', nullable: true })
  bookingDate: Date;

  @ManyToOne((type) => Hotel, (hotel) => hotel.booking)
  hotel: Hotel;
}
