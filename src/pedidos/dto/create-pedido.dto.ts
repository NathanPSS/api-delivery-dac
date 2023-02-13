import { IsArray, IsNumber } from "class-validator";
import { PedidoProduto } from "../model/PedidoProduto.entity";
import { produtoPedidoDto } from "./createPedido.dto";

export class CreatePedidoDto {

    @IsArray()
    produto: produtoPedidoDto[]
    
}
