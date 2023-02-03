import { IsAlphanumeric, IsEmail, IsPhoneNumber, IsString } from "class-validator"

export class CreateUserDto {
    @IsEmail()
    email: string

    @IsAlphanumeric()
    nome: string

    @IsString()
    password: string

    @IsString()
    endereco: string

    @IsPhoneNumber("BR")
    telefone: string
}
