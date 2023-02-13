import { IsNumber, IsNumberOptions, IsString, ValidationOptions } from "class-validator";

export class CreateProdutoDto {

    @IsString()
    nome: string

    @IsNumber()
    preco: number

    @IsString()
    imagem: string

    @IsString()
    categoria: string

    @IsString()
    descricao: string
}
