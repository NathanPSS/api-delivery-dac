import { IsAlphanumeric, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateLojaDto {
    
    @IsAlphanumeric()
    @IsNotEmpty()
    cnpj: string

    @IsString()
    @IsNotEmpty()
    nome: string

}
