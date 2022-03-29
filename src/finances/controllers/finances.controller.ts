import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFinanceDTO } from '../dtos/create-finance.dto';
import { Finance } from '../models/finance.model';
import { FinancesService } from '../services/finances.service';

@Controller('finances')
export class FinancesController {
  constructor(private financesService: FinancesService) {}

  @Get()
  public getAllFinances(): Finance[] {
    return this.financesService.getAllFinances();
  }

  @Post()
  public createFinance(@Body() createFinanceDTO: CreateFinanceDTO): Finance {
    return this.financesService.createFinance(createFinanceDTO);
  }
}
