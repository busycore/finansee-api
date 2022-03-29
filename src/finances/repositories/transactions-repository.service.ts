import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, MongoRepository } from 'typeorm';
import { Transaction } from '../models/transaction.model';
import { ITransactionRepository } from './ITransaction.repository';

@EntityRepository(Transaction)
@Injectable()
export class TransactionsRepository implements ITransactionRepository {
  constructor(
    @InjectRepository(Transaction)
    private readonly mongoRepository: MongoRepository<Transaction>,
  ) {}

  async createTransaction(
    transaction: Omit<Transaction, 'id'>,
  ): Promise<Transaction> {
    return this.mongoRepository.save(transaction);
  }
  async getAllTransactions(): Promise<Transaction[]> {
    return this.mongoRepository.find();
  }
}
