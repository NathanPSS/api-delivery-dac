import { Produto } from "src/produtos/model/produto.entity";
import { Users } from "src/user/model/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lojas {

    @PrimaryGeneratedColumn('increment',{type:'int'})
    id: number

    @Column({type:'varchar',length:500,unique:true})
    cnpj: string

    @Column({type:'varchar',length:500})
    nome: string

    @ManyToOne((type => Users), user => user.lojas,{nullable:false,createForeignKeyConstraints:true})
    idDono: number

    @OneToMany(type => Produto, produto => produto.loja)
    produtos: Produto[]
}