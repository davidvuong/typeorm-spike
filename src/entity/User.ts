import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Opportunity } from './Opportunity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  age!: number;

  @OneToMany((type) => Opportunity, (opportunity) => opportunity.user)
  opportunities!: Opportunity[];
}
