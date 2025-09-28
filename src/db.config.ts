import { DBConfig } from 'ngx-indexed-db';

export const dbConfig: DBConfig = {
  name: 'notesDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'categories',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'userId', keypath: 'userId', options: { unique: false } },
        { name: 'createdAt', keypath: 'createdAt', options: { unique: false } },
        { name: 'updatedAt', keypath: 'updatedAt', options: { unique: false } },
      ],
    },
    {
      store: 'notes',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'content', keypath: 'content', options: { unique: false } },
        { name: 'priority', keypath: 'priority', options: { unique: false } },
        { name: 'userId', keypath: 'userId', options: { unique: false } },
        { name: 'category', keypath: 'category', options: { unique: false } },
        { name: 'createdAt', keypath: 'createdAt', options: { unique: false } },
        { name: 'updatedAt', keypath: 'updatedAt', options: { unique: false } },
      ],
    },
    {
      store: 'users',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'email', keypath: 'email', options: { unique: false } },
        { name: 'password', keypath: 'password', options: { unique: false } },
        { name: 'created_at', keypath: 'created_at', options: { unique: false } },
      ],
    },
  ],
};
