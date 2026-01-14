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

import { TemaService } from '../entities/services/tema.services';
import { Tema } from '../entities/tema.entity';

@Controller('/temas') //chama os serviços
export class TemaController {
  constructor(private readonly TemaServices: TemaService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Tema[]> {
    return this.TemaServices.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Tema> {
    return this.TemaServices.findById(id);
  }
  @Get('/descricao/:descricao')
  @HttpCode(HttpStatus.OK)
  findByDescription(@Param('descicao') descricao: string): Promise<Tema[]> {
    return this.TemaServices.findByDescription(descricao);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() tema: Tema): Promise<Tema> {
    return this.TemaServices.create(tema);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() tema: Tema): Promise<Tema> {
    return this.TemaServices.update(tema);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.TemaServices.delete(id);
  }
}
