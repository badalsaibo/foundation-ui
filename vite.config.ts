import { defineConfig } from 'vite'
import linaria from '@linaria/vite';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [linaria(), react()],
})
