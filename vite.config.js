import { defineConfig } from 'vite'
import dotenv from 'dotenv'
import react from '@vitejs/plugin-react'

dotenv.config();

// Process Enviroment Variable
// https://stackoverflow.com/questions/75265156/how-to-add-environment-variables-in-vite-config-js-for-a-react-project
console.log('BACKEND_HOST: ' + process.env.BACKEND_SERVICE_HOST);
console.log('BACKEND_PORT: ' + process.env.BACKEND_SERVICE_PORT);

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    plugins: [react()],
    preview: {
        port: 8080,
        strictPort: true,
    },
    server: {
        port: 8080,
        strictPort: true,
        host: true,
        origin: "http://0.0.0.0:8080",
    },
})
