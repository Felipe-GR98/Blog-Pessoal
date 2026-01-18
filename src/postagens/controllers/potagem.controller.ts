import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { PostagemService } from '../../tema/services/postagem.service';
import { Postagem } from '../entities/postagens.entity';

@Controller('/postagens') //chama os serviços
export class PostagemController {
  constructor(private readonly postagemServices: PostagemService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Postagem[]> {
    return this.postagemServices.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem> {
    return this.postagemServices.findById(id);
  }
  @Get('/titulo/:titulo')
  @HttpCode(HttpStatus.OK)
  findAllByTitle(@Param('titulo') titulo: string): Promise<Postagem[]> {
    return this.postagemServices.findAllByTitle(titulo);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() postagem: Postagem): Promise<Postagem> {
    return this.postagemServices.create(postagem);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() postagem: Postagem): Promise<Postagem> {
    return this.postagemServices.update(postagem);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.postagemServices.delete(id);
  }
}
