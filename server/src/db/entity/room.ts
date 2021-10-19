import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Index, ManyToMany, JoinColumn, JoinTable } from 'typeorm';
import { User } from '.';

@Entity()
export class Room extends BaseEntity {
    @Index()
    @PrimaryGeneratedColumn('uuid')
    uid!: string;

    @Column()
    name!: string;

    @Column()
    creater!: string;

    @ManyToMany((type) => User, uid => uid.name)
    @JoinTable()
    member!: User[];
}
