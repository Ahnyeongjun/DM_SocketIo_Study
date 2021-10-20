import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Index, } from 'typeorm';

@Entity()
export class Message extends BaseEntity {
    @Index()
    @PrimaryGeneratedColumn('uuid')
    uid!: string;

    @Column()
    writer!: string;

    @Column()
    roomId!: string;

    @Column()
    msg!: string;

    @Column()
    createdAt!: string;

}
