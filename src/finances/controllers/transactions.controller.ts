import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
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
  @HttpCode(HttpStatus.OK)
  public async getAllFinances(): Promise<Transaction[]> {
    return this.financesService.getAllTransactions();
  }

  @Get('/filter')
  @HttpCode(HttpStatus.OK)
  public async getFilteredTransactions(
    @Query('type') type: TransactionType,
    @Query('category') category: TransactionCategory,
  ): Promise<Transaction[]> {
    const filter: FilterTransactionDTO = { category, type };
    console.log(filter);
    return this.financesService.getFilteredTransactions(filter);
  }

  @Get('/search')
  @HttpCode(HttpStatus.OK)
  public async searchTransactions(
    @Query('keyword') keyword: string,
  ): Promise<Transaction[]> {
    const filter: SearchTransactionDTO = { keyword };
    return this.financesService.searchTransactions(filter);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deleteFinance(@Param('id') objectId: string): Promise<void> {
    return this.financesService.deleteTransaction(objectId);
  }

  @Post()
  @HttpCode(201)
  public async createFinance(
    @Body() createFinanceDTO: CreateFinanceDTO,
  ): Promise<Transaction> {
    return this.financesService.createTransaction(createFinanceDTO);
  }
}
