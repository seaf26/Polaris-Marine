import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'i18n-vendor': ['react-i18next', 'i18next', 'i18next-browser-languagedetector'],
          'ui-vendor': ['lucide-react'],
          'form-vendor': ['@formspree/react'],
          'animation-vendor': ['motion/react'],
          // Feature chunks
          'components': [
            './src/components/Header.tsx',
            './src/components/Footer.tsx',
            './src/components/Contact.tsx',
            './src/components/Hero.tsx',
            './src/components/Services.tsx',
            './src/components/Gallery.tsx',
            './src/components/Process.tsx',
            './src/components/Testimonials.tsx',
            './src/components/PolarisAbout.tsx',
            './src/components/OurServices.tsx',
            './src/components/WhyPolaris.tsx',
            './src/components/FutureVision.tsx',
            './src/components/ProjectGoal.tsx',
            './src/components/MansoryDemo.tsx',
            './src/components/Masonry.tsx',
            './src/components/maritime-hero-section.tsx',
          ],
        },
      },
    },
    // Enable source maps for debugging
    sourcemap: false,
    // Minify options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-i18next',
      'i18next',
      'i18next-browser-languagedetector',
      'lucide-react',
      '@formspree/react',
      'motion/react',
    ],
    exclude: [],
  },
});
