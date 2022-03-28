import { Controller, Get } from '@nestjs/common';

@Controller('finances')
export class FinancesController {
  @Get()
  public getAllFinances() {
    return 'hey';
  }
}
