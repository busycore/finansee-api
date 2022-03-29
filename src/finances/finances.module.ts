import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancesController } from './controllers/finances.controller';
import { Finance } from './models/finance.model';
import { FinanceRepository } from './repositories/finance.repository';
import { FinancesService } from './services/finances.service';

@Module({
  imports: [TypeOrmModule.forFeature([Finance])],
  controllers: [FinancesController],
  providers: [FinancesService, FinanceRepository],
})
export class FinancesModule {}
