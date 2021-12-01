export interface Environment {
  readonly SECRET_KEY: string;
  readonly JWT_EXPIRATION: number;
  readonly DATABASE_NAME: string;
  readonly DATABASE_TYPE: 'sqlite' | 'mysql';
}
const dev_mode = true;

const dev_env: Environment = {
  SECRET_KEY: 'dev_key',
  JWT_EXPIRATION: 60 * 60,
  DATABASE_NAME: 'db',
  DATABASE_TYPE: 'sqlite',
};

const pro_env: Environment = {
  SECRET_KEY: 'pro_key',
  JWT_EXPIRATION: 60 * 60,
  DATABASE_NAME: 'pro_db',
  DATABASE_TYPE: 'sqlite',
};

export const environment: Environment = dev_mode ? dev_env : pro_env;
