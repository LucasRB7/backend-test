import { Decimal128 } from "typeorm";


export class CreateProdutoDto {
    nome: string;
    preco: number;
    quantidade: number;
}
