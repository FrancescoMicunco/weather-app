/// <reference types="react-scripts" />
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        REACT_APP_PRIVATE_KEY: string;
        NODE_ENV: 'development' | 'production';
        // PORT?: string;
        // PWD: string;
      }
    }
  }

export {}