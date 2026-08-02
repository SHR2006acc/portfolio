import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { fontFamily: { sans: ['var(--font-inter)', 'sans-serif'] }, colors: { ink: '#07111f', blue: '#4cc9ff' } } }, plugins: [] }
export default config
