import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFinanceDTO } from '../dtos/create-finance.dto';
import { Transaction } from '../models/transaction.model';
import { TransactionsService } from '../services/transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private financesService: TransactionsService) {}

  @Get()
  public async getAllFinances(): Promise<Transaction[]> {
    return this.financesService.getAllTransactions();
  }

  @Post()
  public async createFinance(
    @Body() createFinanceDTO: CreateFinanceDTO,
  ): Promise<Transaction> {
    return this.financesService.createTransaction(createFinanceDTO);
  }
}
