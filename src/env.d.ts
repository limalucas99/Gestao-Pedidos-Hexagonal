declare namespace NodeJS {
  interface ProcessEnv {
    POSTGRES_USER: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_DB: string;
  }
}
