import { Column, CreateDateColumn, Decimal128, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'mercado'})
export class Produto {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({name:'nome'})
    nome: string;

    @Column({name:'preco'})
    preco: number;

    @Column({name:'quantidade'})
    quantidade: number;

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'updated_at'})
    updatedAt: Date;

}
