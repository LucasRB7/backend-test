import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
//import { UpdateProdutoDto } from './dto/update-produto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto >
  ){}

  async save(createProdutoDto: CreateProdutoDto): Promise <Produto> {
    return this.produtoRepository.save(this.produtoRepository.create(createProdutoDto));
    }

  findAll() {
    return this.produtoRepository.find()
  }

  // findOne(id: number) {
  //   return this.produtoRepository.findBy().
  // }

  // update(id: number, updateProdutoDto: UpdateProdutoDto) {
  //   return `This action updates a #${id} produto`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} produto`;
  // }
}
