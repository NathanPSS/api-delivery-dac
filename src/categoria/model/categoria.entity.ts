import { Produto } from "src/produtos/model/produto.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {

    @PrimaryGeneratedColumn('increment',{type: 'int'})
    id: number

    @Column({type:'varchar',length:100})
    nome: string

    @ManyToMany(type => Produto)
    produtos: Produto[]
}