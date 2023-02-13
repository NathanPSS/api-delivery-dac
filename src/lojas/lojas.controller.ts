import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { LojasService } from './lojas.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { Request as ExpressRequest } from 'express';
import { JwtGuardService } from '../auth/app-jwt/guards/jwt-guard/jwt-guard.service';
import { AuthJwtService } from '../auth/app-jwt/auth-jwt/auth-jwt.service';

@Controller('/user/lojas')
export class LojasController {
  constructor(
    private readonly lojasService: LojasService,
    private readonly jwt :AuthJwtService
    ) {}
 
  @UseGuards(JwtGuardService)
  @Post()
 async create(@Body() createLojaDto: CreateLojaDto,@Request() req:ExpressRequest) {
    const user :any= await this.jwt.decode(req.headers.authorization)
    return await this.lojasService.create(createLojaDto,user.username);
  }

  @UseGuards(JwtGuardService)
  @Get('/all')
  async findAll(@Request() req:ExpressRequest) {
    const user :any= await this.jwt.decode(req.headers.authorization)
    return await this.lojasService.findAllUser(user.username)
  }

  @UseGuards(JwtGuardService)
  @Get(':id')
  async findOne(@Param('id') id:string) {
    return await this.lojasService.findOne(+id)
  }
  
  @UseGuards(JwtGuardService)
  @Patch(':id')
  async update(@Request() req:ExpressRequest, @Body() updateLojaDto: UpdateLojaDto) {
    const user :any= await this.jwt.decode(req.headers.authorization)
    return this.lojasService.update(user.username, updateLojaDto);
  }

  @Delete(':id')
 async remove(@Request() req:ExpressRequest) {
    const user :any= await this.jwt.decode(req.headers.authorization)
    return this.lojasService.remove(user.username);
  }
}
