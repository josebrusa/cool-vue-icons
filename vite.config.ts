import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['src/**/*.spec.ts', 'src/**/*.test.ts']
    })
  ],
  build: {
    // Target para soportar navegadores más antiguos
    // Opciones disponibles:
    // - 'es2015' - Soporta navegadores desde 2015 (IE11, Chrome 49+, Firefox 45+, Safari 10+)
    // - 'es2018' - Soporta navegadores más modernos (Chrome 64+, Firefox 60+, Safari 12+)
    // - 'es2020' - Navegadores modernos (Chrome 80+, Firefox 74+, Safari 13.1+)
    // - 'baseline-widely-available' - Por defecto en Vite 7 (Chrome 107+, Edge 107+, Firefox 104+, Safari 16+)
    // - Array de navegadores específicos: ['chrome64', 'firefox60', 'safari12']
    target: 'es2015',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'IconsCoolVue',
      fileName: (format) => `index.${format === 'es' ? 'esm' : format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})