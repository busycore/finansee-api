import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsModule } from './transactions/transactions.module';
import { Transaction } from './transactions/models/transaction.model';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGODB_URL,
      database: process.env.MONGODB_DATABASE,
      synchronize: true,
      entities: [Transaction],
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),

    TransactionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
