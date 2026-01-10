import { Column, Entity } from "typeorm";
import { UserRole } from "../enums/UserRole";

@Entity({ name: "user" })
export class User {
    @Column()
    email: string;

    @Column()
    firstname: string;

    @Column()
    secondname: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.ADMIN
    })
    role: string;

    @Column({
        type: 'timestamp with time zone'
    })
    created_at: Date
}