import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancesModule } from './finances/finances.module';
import { Finance } from './finances/models/finance.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost',
      database: 'transactions',
      synchronize: true,
      entities: [Finance],
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),

    FinancesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
