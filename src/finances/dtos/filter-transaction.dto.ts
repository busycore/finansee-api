import {
  TransactionCategory,
  TransactionType,
} from '../models/transaction.model';

export class FilterTransactionDTO {
  type?: TransactionType;
  category?: TransactionCategory;
}
