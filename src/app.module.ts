import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancesModule } from './finances/finances.module';
import { Transaction } from './finances/models/transaction.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost',
      database: 'transactions',
      synchronize: true,
      entities: [Transaction],
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),

    FinancesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
