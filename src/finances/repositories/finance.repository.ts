import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, MongoRepository } from 'typeorm';
import { Finance } from '../models/finance.model';
import { IFinanceRepository } from './Ifinance.repository';

@EntityRepository(Finance)
@Injectable()
export class FinanceRepository implements IFinanceRepository {
  constructor(
    @InjectRepository(Finance)
    private readonly mongoRepository: MongoRepository<Finance>,
  ) {}

  async createTransaction(finance: Omit<Finance, 'id'>): Promise<Finance> {
    return this.mongoRepository.save(finance);
  }
  async getAllTransactions(): Promise<Finance[]> {
    return this.mongoRepository.find();
  }
}
