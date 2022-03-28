import { Module } from '@nestjs/common';
import { FinancesController } from './finances.controller';

@Module({
  controllers: [FinancesController],
})
export class FinancesModule {}
