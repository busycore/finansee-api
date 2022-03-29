import { Inject, Injectable } from '@nestjs/common';
import { CreateFinanceDTO } from '../dtos/create-finance.dto';
import { Transaction } from '../models/transaction.model';
import { ITransactionRepository } from '../repositories/ITransaction.repository';
import { TransactionsRepository } from '../repositories/transactions-repository.service';

@Injectable()
export class TransactionsService {
  constructor(
    @Inject('TRANSACTIONS_REPOSITORY')
    private transactionsRepository: ITransactionRepository,
  ) {}

  public async getAllTransactions(): Promise<Transaction[]> {
    const found = await this.transactionsRepository.getAllTransactions();
    console.log(found);
    return found;
  }

  public async createTransaction(
    createFinanceDTO: CreateFinanceDTO,
  ): Promise<Transaction> {
    const { name, type, category, value, date } = createFinanceDTO;

    const newTransaction = {
      name,
      type,
      category,
      value,
      date,
    };
    const mongoCreatedTransaction =
      await this.transactionsRepository.createTransaction(newTransaction);
    return mongoCreatedTransaction;
  }
}
