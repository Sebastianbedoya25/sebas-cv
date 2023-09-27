import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
        fondo: '#141228',
        azul: '#49D1E1',
        blanco: 'white'
    },
    fontFamily: {
      'Epilogue': ['Epilogue', 'sans-serif'],
      'Poppins': ['Poppins', 'sans-serif']
    },
  },
  plugins: [],
}
export default config
