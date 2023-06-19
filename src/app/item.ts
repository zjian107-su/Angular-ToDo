// priority 1 = high
// priority 2 = medium
// priority 3 = low
export interface Item {
  description: string;
  dueDate?: Date;
  priority: 1 | 2 | 3;
  status: 'Not started' | 'In progress' | 'Completed';
}
