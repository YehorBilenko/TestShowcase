import dotenv from 'dotenv';
import config from '12factor-config';
import { IAppConfig } from 'interfaces';

dotenv.config();

export const appConfig: IAppConfig = config({
  nodeEnv: {
    env: 'NODE_ENV',
    type: 'string',
    required: true,
    default: 'production',
  },
});
