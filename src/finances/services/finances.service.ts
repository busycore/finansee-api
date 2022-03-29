import { Injectable } from '@nestjs/common';
import { CreateFinanceDTO } from '../dtos/create-finance.dto';
import { Finance, FinanceCategory, FinanceType } from '../models/finance.model';

@Injectable()
export class FinancesService {
  private FinancesData: Finance[] = [];

  public getAllFinances(): Finance[] {
    return this.FinancesData;
  }

  public createFinance(createFinanceDTO: CreateFinanceDTO): Finance {
    const { name, type, category, value, date } = createFinanceDTO;
    const newFinance = {
      id: '123',
      name,
      type,
      category,
      value,
      date,
    };
    this.FinancesData.push(newFinance);
    return newFinance;
  }
}
