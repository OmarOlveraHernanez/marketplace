import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id: number;
   
    @Column({ type: 'uuid', default: () => uuid() })
    uuid: string;
    
    @Column()
    email: string;

    @Column()
    password: string;

}
