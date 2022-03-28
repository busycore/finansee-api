import { Module } from '@nestjs/common';
import { FinancesModule } from './finances/finances.module';

@Module({
  imports: [FinancesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
