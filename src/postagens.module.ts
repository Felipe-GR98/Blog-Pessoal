import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemController } from './postagens/controllers/potagem.controller';
import { Postagem } from './postagens/entities/postagens.entity';
import { PostagemService } from './postagens/services/postagem.service';

@Module({
  imports: [TypeOrmModule.forFeature([Postagem])],
  providers: [PostagemService],
  controllers: [PostagemController],
  exports: [],
})
export class PostagemModule {}
