import {
    Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn,
} from 'typeorm';

export interface ICommonFields{
    id:number;
    createAt:string;
    deleteAt?:string;
}

export class CommonFields implements ICommonFields {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        nullable: false,
        default: Date.now(),
    })
    @CreateDateColumn({ type: 'timestamp' })
        createAt:string;

    @Column({})
    @DeleteDateColumn({ type: 'timestamp' })
        deleteAt?:string;
}
