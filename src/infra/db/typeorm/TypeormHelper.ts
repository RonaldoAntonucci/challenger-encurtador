import { Connection, createConnection, getConnection } from 'typeorm';

export const TypeOrmHelper = {
  async connect(): Promise<void> {
    await createConnection();
  },

  async disconnect(): Promise<void> {
    await getConnection().close();
  },

  getClient(): Connection {
    return getConnection();
  },
};
