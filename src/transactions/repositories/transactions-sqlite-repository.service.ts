import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository,Like } from "typeorm";
import { SearchTransactionDTO } from '../dtos/search-transaction.dto';
import { Transaction } from '../models/transaction.model';
import { ITransactionRepository } from './ITransaction.repository';
import { v4 as uuid } from 'uuid';


@EntityRepository(Transaction)
@Injectable()
export class TransactionsSqliteRepository implements ITransactionRepository {
  constructor(
    @InjectRepository(Transaction)
    private readonly mongoRepository: Repository<Transaction>,
  ) {}

  async deleteTransaction(objectId: string): Promise<void> {
    this.mongoRepository.delete(objectId);
  }

  async searchTransactions(
    searchTransactionDTO: SearchTransactionDTO,
  ): Promise<Transaction[]> {
    Object.keys(searchTransactionDTO).forEach(
      (filter) =>
        searchTransactionDTO[filter] === undefined &&
        delete searchTransactionDTO[filter],
    );

    console.log(searchTransactionDTO);
    const keyword = searchTransactionDTO.keyword
      ? searchTransactionDTO.keyword
      : '';

    const Querytype = searchTransactionDTO.type ? searchTransactionDTO.type : '';

    const Querycategory = searchTransactionDTO.category
      ? searchTransactionDTO.category
      : '';

    // const query = this.mongoRepository.find({
    //   where: {
    //     $and: [
    //       {
    //         $or: [
    //           {
    //             name: { $regex: keyword, $options: 'i' },
    //           },
    //           { value: { $eq: Number(searchTransactionDTO.keyword) } },
    //         ],
    //       },
    //       {
    //         type: {
    //           $regex: type,
    //           $options: 'i',
    //         },
    //       },
    //       {
    //         category: { $regex: category, $options: 'i' },
    //       },
    //     ],
    //   },
    // });

    // const sqliteQuery = this.mongoRepository.find({where:{
    //   type:Querytype,
    //   category:Querycategory,
    //
    //   }});



    const sqliteQuery = this.mongoRepository.find({
      where:`type = '${Querytype}' AND category ='${Querycategory}'
      
      AND (name LIKE '%${keyword}%' ${Number(keyword) ? "OR value ="+Number(keyword) : ""} )
      `});



    return sqliteQuery;
  }

  async createTransaction(
    transaction: Omit<Transaction, 'id'>,
  ): Promise<Transaction> {
    const newTransaction = {...transaction,id:uuid()}


    return this.mongoRepository.save(newTransaction);
  }

  getTransactionById(objectId: string): Promise<Transaction> {
    return this.mongoRepository.findOne(objectId);
  }

  async getAllTransactions(): Promise<Transaction[]> {
    return this.mongoRepository.find();
  }
}
