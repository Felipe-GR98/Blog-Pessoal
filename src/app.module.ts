import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Postagem } from './postagens/entities/postagens.entity';
import { PostagemModule } from './postagens/postagens.module';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';
import { Usuario } from './usuario/entities/usuario.estiti';
import { UsuarioModule } from './usuario/usario.modeule';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_blog_pessoal',
      entities: [Postagem, Tema, Usuario],
      synchronize: true,
    }),
    PostagemModule,
    TemaModule,
    AuthModule,
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
