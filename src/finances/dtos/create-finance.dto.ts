import { IsEnum, IsNotEmpty } from 'class-validator';
import {
  TransactionCategory,
  TransactionType,
} from '../models/transaction.model';

export class CreateFinanceDTO {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsNotEmpty({ message: 'Category is required' })
  @IsEnum(TransactionCategory)
  category: TransactionCategory;

  @IsNotEmpty({ message: 'Type is required' })
  @IsEnum(TransactionType)
  type: TransactionType;

  @IsNotEmpty({ message: 'Number is required' })
  value: number;

  @IsNotEmpty({ message: 'Date is required' })
  date: Date;
}
