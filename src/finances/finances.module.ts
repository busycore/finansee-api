import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancesController } from './controllers/finances.controller';
import { FinanceRepository } from './repositories/finance.repository';
import { FinancesService } from './services/finances.service';

@Module({
  imports: [TypeOrmModule.forFeature([FinanceRepository])],
  controllers: [FinancesController],
  providers: [FinancesService],
})
export class FinancesModule {}
