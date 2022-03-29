import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateFinanceDTO } from '../dtos/create-finance.dto';
import { FilterTransactionDTO } from '../dtos/filter-transaction.dto';
import { SearchTransactionDTO } from '../dtos/search-transaction.dto';
import {
  Transaction,
  TransactionCategory,
  TransactionType,
} from '../models/transaction.model';
import { TransactionsService } from '../services/transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private financesService: TransactionsService) {}

  @Get()
  public async getAllFinances(): Promise<Transaction[]> {
    return this.financesService.getAllTransactions();
  }

  @Get('/filter')
  public async getFilteredTransactions(
    @Query('type') type: TransactionType,
    @Query('category') category: TransactionCategory,
  ): Promise<Transaction[]> {
    const filter: FilterTransactionDTO = { category, type };
    console.log(filter);
    return this.financesService.getFilteredTransactions(filter);
  }

  @Get('/search')
  public async searchTransactions(
    @Query('keyword') keyword: string,
  ): Promise<Transaction[]> {
    const filter: SearchTransactionDTO = { keyword };
    return this.financesService.searchTransactions(filter);
  }

  @Post()
  public async createFinance(
    @Body() createFinanceDTO: CreateFinanceDTO,
  ): Promise<Transaction> {
    return this.financesService.createTransaction(createFinanceDTO);
  }
}
