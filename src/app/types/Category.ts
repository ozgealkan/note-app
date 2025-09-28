export interface Category {
  id: number;
  name: string;
  userId: number;
}

export type CreateCategory = Omit<Category, 'id'>;
