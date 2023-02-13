import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { JwtGuardService } from '../auth/app-jwt/guards/jwt-guard/jwt-guard.service';

@Controller('user/lojas/:idLojas/produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @UseGuards(JwtGuardService)
  @Post()
  create(@Body() createProdutoDto: CreateProdutoDto,@Param('idLojas') idLoja :string) {
    console.log(idLoja)
    return this.produtosService.create(createProdutoDto,+idLoja);
  }

  @UseGuards(JwtGuardService)
  @Get()
  findAll() {
    return this.produtosService.findAll();
  }
  @UseGuards(JwtGuardService)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosService.findOne(+id);
  }
  @UseGuards(JwtGuardService)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtosService.update(+id, updateProdutoDto);
  }
  @UseGuards(JwtGuardService)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtosService.remove(+id);
  }
}
