export interface Note {
  id: number;
  title: string;
  content: string;
  priority: 'low' | 'medium' | 'high';
  category: string;
  userId: number;
}

export type CreateNote = Omit<Note, 'id'>;
