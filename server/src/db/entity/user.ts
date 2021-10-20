import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Index, ManyToMany, JoinTable, PrimaryColumn } from 'typeorm';
import { Room } from './room';

@Entity()
export class User extends BaseEntity {
  @Index()
  @PrimaryColumn()
  name!: string;

  @Column()
  id!: string;

  @Column()
  password!: string;

}
