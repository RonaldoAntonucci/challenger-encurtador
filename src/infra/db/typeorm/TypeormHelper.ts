import { Connection, createConnection, getConnection } from 'typeorm';

export const TypeOrmHelper = {
  client: Connection,

  async connect(): Promise<void> {
    await createConnection();
  },

  async disconnect(): Promise<void> {
    await getConnection().close();
  },
};
