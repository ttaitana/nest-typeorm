import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hotelName: string;

  @Column()
  roomNumber: string;

  @Column()
  name: string;

  @Column({ type: 'timestamp', nullable: true })
  bookingDate: Date;
}
