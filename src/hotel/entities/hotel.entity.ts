import { Booking } from 'src/booking/entities/booking.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn()
  hotelId: number;

  @Column()
  hotelName: string;

  @Column()
  address: string;

  @Column()
  email: string;

  @OneToMany((type) => Booking, (booking) => booking.hotel)
  booking: Booking[];
}
