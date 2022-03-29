import { Controller, Get } from '@nestjs/common';
import { Finance, FinanceCategory, FinanceType } from '../models/finance.model';

@Controller('finances')
export class FinancesController {
  @Get()
  public getAllFinances(): Finance[] {
    const newFin: Finance = {
      id: '123',
      name: 'Mr Donald Order',
      category: FinanceCategory.FOOD,
      type: FinanceType.EXPENSE,
      value: 35.49,
      date: new Date(),
    };
    return [newFin];
  }
}
