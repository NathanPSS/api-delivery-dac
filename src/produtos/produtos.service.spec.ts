import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosService } from './produtos.service';
import { produtoRepositoryTest } from './repository/produtos.test.repository';

describe('ProdutosService', () => {
  let service: ProdutosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutosService,...produtoRepositoryTest],
    }).compile();

    service = module.get<ProdutosService>(ProdutosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('deve criar um produto',() =>{
      
  })
});
