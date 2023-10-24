import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { 
    port: 3000,
    proxy: { 
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      },
    },
  },
});

// Adding to the server attribute in the config above allows us to control some elements
// In the server object we define a port as 3000 (As this is the standard REACT port)
// We also add a proxy as I would have done previously within the package.json in previous react projects
// in the proxy we also define a target meaning anything that goes to /api then this will be to our backend server (http://localhost:8000)
// changeOrigin confirms this change to ensure the REQ's are sent correctly. 
