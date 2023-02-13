import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LocalUserGuardService } from './auth-user/guards/local-user-guard.service';
import  { Request as ExpressRequest } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { JwtGuardService } from '../auth/app-jwt/guards/jwt-guard/jwt-guard.service';
import { AuthJwtService } from '../auth/app-jwt/auth-jwt/auth-jwt.service';



@Controller('user')
export class UserController{
  constructor(
    private readonly userService: UserService,
    private readonly jwt :AuthJwtService
    ) {}
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(LocalUserGuardService)
  @Post('login')
  async login(@Request() req:ExpressRequest){
   return await this.jwt.login(req.user)
  }

  @UseGuards(JwtGuardService)
  @Get(':id')
  async  findOne(@Request() req :ExpressRequest) {
    const id :any= await this.jwt.decode(req.headers.authorization)
    return this.userService.findOne(id.username);
  }
  @UseGuards(JwtGuardService)
  @Patch(':id')
  async update(@Body() updateUserDto: UpdateUserDto,@Request() req :ExpressRequest) {
    const id :any= await this.jwt.decode(req.headers.authorization)
    return this.userService.update(id.username, updateUserDto);
  }

  @UseGuards(JwtGuardService)
  @Delete(':id')
  async remove(@Request() req :ExpressRequest) {
    const id :any= await this.jwt.decode(req.headers.authorization)
    return this.userService.remove(id.username);
  }
}
