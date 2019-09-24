import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Opportunity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne((type) => User, (user) => user.opportunities)
  user!: User;
}
