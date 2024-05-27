import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true,
        reporters: ['html'],
        environment: 'jsdom',
    },
});