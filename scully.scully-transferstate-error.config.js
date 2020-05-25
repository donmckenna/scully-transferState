"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
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
        'search/:categories': {
            type: 'ignored'
        }
    }
};
