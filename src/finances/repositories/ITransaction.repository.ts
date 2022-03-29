import { Transaction } from '../models/transaction.model';

export interface ITransactionRepository {
  createTransaction(transaction: Omit<Transaction, 'id'>): Promise<Transaction>;
  getAllTransactions(): Promise<Transaction[]>;
}
