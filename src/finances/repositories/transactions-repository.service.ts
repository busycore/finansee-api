import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Like, MongoRepository } from 'typeorm';
import { FilterTransactionDTO } from '../dtos/filter-transaction.dto';
import { SearchTransactionDTO } from '../dtos/search-transaction.dto';
import { Transaction } from '../models/transaction.model';
import { ITransactionRepository } from './ITransaction.repository';

@EntityRepository(Transaction)
@Injectable()
export class TransactionsRepository implements ITransactionRepository {
  constructor(
    @InjectRepository(Transaction)
    private readonly mongoRepository: MongoRepository<Transaction>,
  ) {}

  async deleteTransaction(objectId: string): Promise<void> {
    this.mongoRepository.delete(objectId);
  }

  async searchTransactions(
    searchTransactionDTO: SearchTransactionDTO,
  ): Promise<Transaction[]> {
    return this.mongoRepository.find({
      where: {
        $or: [
          {
            name: { $regex: searchTransactionDTO.keyword, $options: 'i' },
          },
          { value: { $eq: Number(searchTransactionDTO.keyword) } },
        ],
      },
    });
  }

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

  getTransactionById(objectId: string): Promise<Transaction> {
    return this.mongoRepository.findOne(objectId);
  }

  async getAllTransactions(): Promise<Transaction[]> {
    return this.mongoRepository.find();
  }
}
