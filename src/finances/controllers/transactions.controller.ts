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
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CreateFinanceDTO } from '../dtos/create-finance.dto';
import { FilterTransactionDTO } from '../dtos/filter-transaction.dto';
import { SearchTransactionDTO } from '../dtos/search-transaction.dto';
import {
  Transaction,
  TransactionCategory,
  TransactionType,
} from '../models/transaction.model';
import { TransactionsService } from '../services/transactions.service';

@ApiTags('finances')
@Controller('transactions')
export class TransactionsController {
  constructor(private financesService: TransactionsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Get a list of all transactions',
  })
  @ApiOperation({
    description: 'Get a list of all transactions',
    summary: 'Get a list of all transactions',
  })
  public async getAllFinances(): Promise<Transaction[]> {
    return this.financesService.getAllTransactions();
  }

  @Get('/filter')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Get a list of all transactions within a filter',
  })
  @ApiQuery({
    name: 'type',
    description: "The transaction's type",
    enum: TransactionType,
    example: TransactionType.EXPENSE,
  })
  @ApiQuery({
    name: 'category',
    description: "The transaction's category",
    enum: TransactionCategory,
    example: TransactionCategory.FOOD,
  })
  @ApiOperation({
    description: 'Get a list of all transactions within a filter',
    summary: 'Get a list of all transactions within a filter',
  })
  public async getFilteredTransactions(
    @Query('type') type: TransactionType,
    @Query('category') category: TransactionCategory,
  ): Promise<Transaction[]> {
    const filter: FilterTransactionDTO = { category, type };
    return this.financesService.getFilteredTransactions(filter);
  }

  @Get('/search')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Get a list of all transactions within a search keyword',
  })
  @ApiQuery({
    name: 'keyword',
    description: "A keyword to be search in transactions\\' value or name",
    example: 'Subscription',
  })
  @ApiOperation({
    description: 'Get a list of all transactions within a search keyword',
    summary: 'Get a list of all transactions within a search keyword',
  })
  public async searchTransactions(
    @Query('keyword') keyword: string,
  ): Promise<Transaction[]> {
    const filter: SearchTransactionDTO = { keyword };
    return this.financesService.searchTransactions(filter);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse({
    description: 'Deletes the transaction however does not return anything',
  })
  @ApiParam({
    name: 'id',
    description: "The transactions' id to be deleted",
    example: '62435577aeb1e58f5a081d51',
  })
  @ApiOperation({
    description: 'Deletes the transaction however does not return anything',
    summary: 'Deletes the transaction however does not return anything',
  })
  public async deleteFinance(@Param('id') objectId: string): Promise<void> {
    return this.financesService.deleteTransaction(objectId);
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({ description: 'Creates a new transaction' })
  @ApiOperation({
    description: 'Creates a new transaction',
    summary: 'Creates a new transaction',
  })
  public async createFinance(
    @Body() createFinanceDTO: CreateFinanceDTO,
  ): Promise<Transaction> {
    return this.financesService.createTransaction(createFinanceDTO);
  }
}
