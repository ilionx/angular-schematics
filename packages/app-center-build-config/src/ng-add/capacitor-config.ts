export interface CapacitorConfig {
  appId: string;
  appName: string;
  bundledWebRuntime: boolean;
  npmClient: 'npm' | 'yarn';
  webDir: string;
  plugins: Record<any, any>;
  cordova: {};
}
