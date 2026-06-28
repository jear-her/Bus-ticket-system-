import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("User")

export class User {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    username!:string;

    @Column()
    email!:string;

    @Column()
    password !:string;

    @Column()
    role!:string;


    @Column()
    created_at !:Date;

    @Column()
    updated_at !:Date;

}
