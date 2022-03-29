import { Inject, Injectable, Query } from '@nestjs/common';
import { CreateFinanceDTO } from '../dtos/create-finance.dto';
import { FilterTransactionDTO } from '../dtos/filter-transaction.dto';
import { SearchTransactionDTO } from '../dtos/search-transaction.dto';
import {
  Transaction,
  TransactionCategory,
  TransactionType,
} from '../models/transaction.model';
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

  public async getFilteredTransactions(
    filter: FilterTransactionDTO,
  ): Promise<Transaction[]> {
    return await this.transactionsRepository.getFilteredTransactions(filter);
  }

  public async searchTransactions(filter: SearchTransactionDTO) {
    return await this.transactionsRepository.searchTransactions(filter);
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
