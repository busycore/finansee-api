import { IsEnum, IsNotEmpty } from 'class-validator';
import { FinanceCategory, FinanceType } from '../models/finance.model';

export class CreateFinanceDTO {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsNotEmpty({ message: 'Category is required' })
  @IsEnum(FinanceCategory)
  category: FinanceCategory;

  @IsNotEmpty({ message: 'Type is required' })
  @IsEnum(FinanceType)
  type: FinanceType;

  @IsNotEmpty({ message: 'Number is required' })
  value: number;

  @IsNotEmpty({ message: 'Date is required' })
  date: Date;
}
