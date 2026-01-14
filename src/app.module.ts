import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagens/entities/postagens.entity';
import { PostagemModule } from './postagens/postagens.module';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_blog_pessoal',
      entities: [Postagem, Tema],
      synchronize: true,
    }),
    PostagemModule,
    TemaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
