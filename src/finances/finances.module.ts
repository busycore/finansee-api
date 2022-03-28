import { Module } from '@nestjs/common';
import { FinancesController } from './controllers/finances.controller';

@Module({
  controllers: [FinancesController],
})
export class FinancesModule {}
