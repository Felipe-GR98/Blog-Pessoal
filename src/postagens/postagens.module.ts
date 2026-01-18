import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemService } from '../tema/services/postagem.service';
import { TemaModule } from '../tema/tema.module';
import { PostagemController } from './controllers/potagem.controller';
import { Postagem } from './entities/postagens.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
  providers: [PostagemService],
  controllers: [PostagemController],
  exports: [],
})
export class PostagemModule {}
