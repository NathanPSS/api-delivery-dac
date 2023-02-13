import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { JwtGuardService } from '../auth/app-jwt/guards/jwt-guard/jwt-guard.service';
import { Request as ExpressRequest } from 'express';
import { AuthJwtService } from '../auth/app-jwt/auth-jwt/auth-jwt.service';

@Controller('user/lojas/:idLojas/pedidos')
export class PedidosController {
  constructor(
    private readonly pedidosService: PedidosService,
    private readonly jwt :AuthJwtService
    ) {}

  @UseGuards(JwtGuardService)
  @Post()
async  create(@Body() createPedidoDto: CreatePedidoDto,@Request() req:ExpressRequest,@Param('idLojas') idLojas: string) {
    const user :any= await this.jwt.decode(req.headers.authorization)
   return this.pedidosService.create(createPedidoDto,user.username,+idLojas); 
  }

  @Get()
  findAll(@Param('idLojas') idLojas:string) {
    return this.pedidosService.findAll(+idLojas);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidosService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidosService.remove(+id);
  }
}
