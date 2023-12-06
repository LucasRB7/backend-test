import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'mercado'})
export class Produto {
    @PrimaryColumn('uuid')
    id: string;

    @Column({name:'nome'})
    nome: string;

    @Column({name:'preco'})
    preco: number;

    @Column({name:'quantidade'})
    quantidade: number;

    @Column({name:'categoria'})
    categoria: string;

    @CreateDateColumn({name:'created_at'})
    createdAt: string;

    @UpdateDateColumn({name:'updated_at'})
    updatedAt: string;

    @DeleteDateColumn({name:'deleted_at'})
    deletedAt: string;
}
