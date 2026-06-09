import * as PB from './index';

declare global {
  interface Window {
    HoldemPB: typeof PB;
  }
}

export {};
