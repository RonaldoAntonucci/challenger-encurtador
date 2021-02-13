/* eslint-disable no-console */
import { TypeOrmHelper } from '@/infra/db/typeorm';
import env from './config/env';

TypeOrmHelper.connect()
  .then(async () => {
    const app = (await import('./config/app')).default;
    app.listen(env.port, () =>
      console.log(`Server running at http://localhost:${env.port}`),
    );
  })
  .catch(console.error);
