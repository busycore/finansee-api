import { EntityRepository, MongoRepository } from 'typeorm';
import { Finance } from '../models/finance.model';

@EntityRepository(Finance)
export class FinanceRepository extends MongoRepository<Finance> {}
