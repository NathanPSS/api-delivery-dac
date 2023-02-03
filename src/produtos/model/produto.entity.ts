import { Categoria } from "src/categoria/model/categoria.entity";
import { Lojas } from "src/lojas/model/lojas.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Produto {
    @PrimaryGeneratedColumn('increment',{type:'int'})
    id: number

    @Column({type:'varchar',length:300})
    nome: string

    @Column({type:'double precision'})
    preco: number

    @Column({type:'text'})
    imagem: string

    @Column({type:'text'})
    descricao: string

    @ManyToOne(type => Lojas, lojas => lojas.id,{createForeignKeyConstraints:true})
    loja: Lojas

    @ManyToMany(type => Categoria)
    @JoinTable()
    categorias: Categoria[]
}
