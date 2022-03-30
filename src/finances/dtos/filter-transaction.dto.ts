import { ApiProperty } from '@nestjs/swagger';
import {
  TransactionCategory,
  TransactionType,
} from '../models/transaction.model';

export class FilterTransactionDTO {
  @ApiProperty({
    description: "The transaction's type",
    enum: TransactionType,
    example: TransactionType.EXPENSE,
  })
  type?: TransactionType;

  @ApiProperty({
    description: "The transaction's category",
    enum: TransactionCategory,
    example: TransactionCategory.FOOD,
  })
  category?: TransactionCategory;
}
