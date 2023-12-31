import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
// import { UpdateProdutoDto } from './dto/update-produto.dto';

@Controller('api/produto')
export class ProdutoController {
  constructor(private produtoService:ProdutoService) {}

  @Post('/cadastro')
  async save(@Body() body: CreateProdutoDto) {
    return this.produtoService.save(body);
  }

  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.produtoService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
  //   return this.produtoService.update(+id, updateProdutoDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.produtoService.remove(+id);
  // }
}
