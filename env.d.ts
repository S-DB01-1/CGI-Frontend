interface ImportMetaEnv {
  readonly MODE: string;
  readonly SSR: boolean;
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly USE_MEMORY: boolean;
  readonly BASE_URL: string;
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
