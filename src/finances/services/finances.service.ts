import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFinanceDTO } from '../dtos/create-finance.dto';
import { Finance } from '../models/finance.model';
import { FinanceRepository } from '../repositories/finance.repository';

@Injectable()
export class FinancesService {
  constructor(
    @InjectRepository(FinanceRepository)
    private financeRepository: FinanceRepository,
  ) {}

  public async getAllFinances(): Promise<Finance[]> {
    const found = await this.financeRepository.find();
    console.log(found);
    return found;
  }

  public async createFinance(
    createFinanceDTO: CreateFinanceDTO,
  ): Promise<Finance> {
    const { name, type, category, value, date } = createFinanceDTO;

    const newFinance = {
      name,
      type,
      category,
      value,
      date,
    };
    const mongoFinance = await this.financeRepository.save(newFinance);
    return mongoFinance;
  }
}
