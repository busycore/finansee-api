import { Controller, Get } from '@nestjs/common';
import { Finance } from '../models/finance.model';
import { FinancesService } from '../services/finances.service';

@Controller('finances')
export class FinancesController {
  constructor(private financesService: FinancesService) {}

  @Get()
  public getAllFinances(): Finance[] {
    return this.financesService.getAllFinances();
  }
}
