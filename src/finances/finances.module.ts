import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsController } from './controllers/transactions.controller';
import { Transaction } from './models/transaction.model';
import { TransactionsRepository } from './repositories/transactions-repository.service';
import { TransactionsService } from './services/transactions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction])],
  controllers: [TransactionsController],
  providers: [
    TransactionsService,
    { provide: 'TRANSACTIONS_REPOSITORY', useClass: TransactionsRepository },
  ],
})
export class FinancesModule {}
