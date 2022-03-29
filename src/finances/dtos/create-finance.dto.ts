import { FinanceCategory, FinanceType } from '../models/finance.model';

export class CreateFinanceDTO {
  name: string;
  category: FinanceCategory;
  type: FinanceType;
  value: number;
  date: Date;
}
