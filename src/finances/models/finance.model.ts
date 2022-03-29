import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Finance {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  category: FinanceCategory;

  @Column()
  type: FinanceType;

  @Column()
  value: number;

  @Column()
  date: Date;
}

export enum FinanceCategory {
  SALARY = 'Salary',
  FOOD = 'Food',
  TRANSPORT = 'Transport',
  HOUSE = 'House',
  OTHER = 'Other',
}

export enum FinanceType {
  INCOME = 'Income',
  EXPENSE = 'Expense',
}
