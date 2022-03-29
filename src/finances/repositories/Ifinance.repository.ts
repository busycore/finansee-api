import { Finance } from '../models/finance.model';

export interface IFinanceRepository {
  createTransaction(finance: Omit<Finance, 'id'>): Promise<Finance>;
  getAllTransactions(): Promise<Finance[]>;
}
