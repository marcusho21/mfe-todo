import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mfetodo.app',
  appName: 'mfe-todo',
  webDir: 'dist/mfe-todo',
  server: {
    androidScheme: 'https',
    url: 'http://localhost:4200',
  },
};

export default config;
