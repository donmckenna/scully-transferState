import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-transferstate-error',
  outDir: './dist/static',
  routes: {
    '/blog/:id': {
      type: 'contentFolder',
      id: {
        folder: './md'
      }
    },
    '/search/:categories': {
      type: 'ignored'
    }
  }
};
