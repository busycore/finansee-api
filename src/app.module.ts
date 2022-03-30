import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancesModule } from './finances/finances.module';
import { Transaction } from './finances/models/transaction.model';

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

    FinancesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
