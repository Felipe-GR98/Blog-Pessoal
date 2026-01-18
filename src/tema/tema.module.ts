import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemaController } from './controllers/tema.contoller';
import { TemaService } from './entities/services/tema.services';
import { Tema } from './entities/tema.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tema])],
  providers: [TemaService],
  controllers: [TemaController],
  exports: [TemaService],
})
export class TemaModule {}
