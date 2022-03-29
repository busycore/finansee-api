export class Finance {
  id: string;
  name: string;
  category: FinanceCategory;
  type: FinanceType;
  value: number;
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
