import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, MongoRepository } from 'typeorm';
import { FilterTransactionDTO } from '../dtos/filter-transaction.dto';
import { Transaction } from '../models/transaction.model';
import { ITransactionRepository } from './ITransaction.repository';

@EntityRepository(Transaction)
@Injectable()
export class TransactionsRepository implements ITransactionRepository {
  constructor(
    @InjectRepository(Transaction)
    private readonly mongoRepository: MongoRepository<Transaction>,
  ) {}

  async getFilteredTransactions(
    filterTransactionDTO: FilterTransactionDTO,
  ): Promise<Transaction[]> {
    //Remove undefined filters
    Object.keys(filterTransactionDTO).forEach(
      (filter) =>
        filterTransactionDTO[filter] === undefined &&
        delete filterTransactionDTO[filter],
    );
    return this.mongoRepository.find(filterTransactionDTO);
  }

  async createTransaction(
    transaction: Omit<Transaction, 'id'>,
  ): Promise<Transaction> {
    return this.mongoRepository.save(transaction);
  }
  async getAllTransactions(): Promise<Transaction[]> {
    return this.mongoRepository.find();
  }
}
