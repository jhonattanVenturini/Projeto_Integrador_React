/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Cores da Choconessa (Mantidas do original)
        'brand-brown-dark': '#7F524C', // Marrom Escuro (Original: #7A4636)
        'brand-brown-medium': '#9C6F67', // Marrom Médio (Caixa de Texto)
        'brand-brown-light': '#D4A574', // Marrom Claro para seções
 
        // Fundos e Textos
        'brand-cream': '#F9F9F2', // Fundo Principal (Branco Sujo/Creme)
        'text-dark': '#4A2A2A', // Cor geral do texto
 
        // Cores de Destaque (Accent)
        'brand-accent-pink': '#DB8598', // Rosa de Destaque (Botões/Cart Badge)
        'brand-accent-peach': '#F29C45', // Pêssego/Laranja do Título Script
 
        // Cores auxiliares para componentes
        'pink-accent': '#DB8598', // Alias para compatibilidade
        'chocolate-dark': '#7F524C', // Alias para compatibilidade
 
        // Cores complementares para melhor UX
        primary: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fad8c0',
          300: '#f6ba90',
          400: '#f29c45', // Pêssego principal
          500: '#ed7c28',
          600: '#de621e',
          700: '#b84d1c',
          800: '#933f1e',
          900: '#77351c',
        },
        secondary: {
          50: '#fdf2f5',
          100: '#fce7ed',
          200: '#f9d0dd',
          300: '#f4a9c1',
          400: '#ec7ca0',
          500: '#db8598', // Rosa principal
          600: '#c4657a',
          700: '#a5516a',
          800: '#88485c',
          900: '#714152',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        // Fontes da Choconessa
        script: [
          '"Dancing Script"',
          '"Pacifico"',
          '"Great Vibes"',
          '"Satisfy"',
          'cursive'
        ],
        sans: [
          'Inter',
          '"Poppins"',
          '"Nunito"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
        serif: [
          '"Playfair Display"',
          '"Crimson Text"',
          'ui-serif',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif'
        ],
        mono: [
          '"Fira Code"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ]
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'custom-xl': '60px', // Arredondamento customizado da Choconessa
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'hard': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 4px 20px -2px rgba(0, 0, 0, 0.1)',
        'brutal': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
      },
      animation: {
        // Animações básicas melhoradas
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
       
        // Animações específicas da Choconessa
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-delayed': 'float 4s ease-in-out infinite 0.5s',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'swing': 'swing 2s ease-in-out infinite',
        'zoom-in': 'zoomIn 0.5s ease-out',
        'zoom-out': 'zoomOut 0.5s ease-out',
        'rotate-y': 'rotateY 0.6s ease-in-out',
        'scale-bounce': 'scaleBounce 0.4s ease-out',
      },
      keyframes: {
        // Animações básicas melhoradas
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
       
        // Animações específicas da Choconessa
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.02)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(242, 156, 69, 0.5)' },
          '100%': { boxShadow: '0 0 25px rgba(242, 156, 69, 0.8), 0 0 35px rgba(219, 133, 152, 0.4)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1.05)' },
          '75%': { transform: 'scale(1.15)' },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(6deg)' },
          '40%': { transform: 'rotate(-6deg)' },
          '60%': { transform: 'rotate(4deg)' },
          '80%': { transform: 'rotate(-2deg)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        zoomOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.8)' },
        },
        rotateY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        scaleBounce: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
       
        // Padrões específicos da Choconessa (Corrigidos)
        'hero-pattern': "url(\"data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='a' patternUnits='userSpaceOnUse' width='60' height='60'%3e%3ccircle cx='30' cy='30' r='4' fill='%23F29C45' fill-opacity='0.1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23a)'/%3e%3c/svg%3e\")",
       
        'dots-pattern': "url(\"data:image/svg+xml,%3csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='dots' patternUnits='userSpaceOnUse' width='20' height='20'%3e%3ccircle cx='10' cy='10' r='2' fill='%23DB8598' fill-opacity='0.15'/%3e%3ccircle cx='2' cy='2' r='1' fill='%23F29C45' fill-opacity='0.1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23dots)'/%3e%3c/svg%3e\")",
       
        'chocolate-texture': "url(\"data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='texture' patternUnits='userSpaceOnUse' width='40' height='40'%3e%3crect width='20' height='20' fill='%237F524C' fill-opacity='0.08'/%3e%3crect x='20' y='20' width='20' height='20' fill='%237F524C' fill-opacity='0.08'/%3e%3crect x='10' y='10' width='20' height='20' fill='%239C6F67' fill-opacity='0.05'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23texture)'/%3e%3c/svg%3e\")",
       
        'hearts-pattern': "url(\"data:image/svg+xml,%3csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='hearts' patternUnits='userSpaceOnUse' width='30' height='30'%3e%3cpath d='M15 25c-3-3-8-6-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 5-5 8-8 11z' fill='%23DB8598' fill-opacity='0.08'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23hearts)'/%3e%3c/svg%3e\")",
       
        'cupcakes-pattern': "url(\"data:image/svg+xml,%3csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='cupcakes' patternUnits='userSpaceOnUse' width='50' height='50'%3e%3ccircle cx='25' cy='15' r='8' fill='%23F29C45' fill-opacity='0.1'/%3e%3crect x='20' y='20' width='10' height='15' fill='%237F524C' fill-opacity='0.08'/%3e%3ccircle cx='10' cy='40' r='3' fill='%23DB8598' fill-opacity='0.12'/%3e%3ccircle cx='40' cy='10' r='2' fill='%23F29C45' fill-opacity='0.15'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23cupcakes)'/%3e%3c/svg%3e\")",
       
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
       
        // Gradientes temáticos
        'warm-gradient': 'linear-gradient(135deg, #F29C45 0%, #DB8598 100%)',
        'chocolate-gradient': 'linear-gradient(135deg, #7F524C 0%, #9C6F67 100%)',
        'cream-gradient': 'linear-gradient(135deg, #F9F9F2 0%, #F5EDE4 100%)',
        'peach-gradient': 'linear-gradient(135deg, #F29C45 0%, #FFB366 50%, #F29C45 100%)',
        'pink-gradient': 'linear-gradient(135deg, #DB8598 0%, #E5A5B4 50%, #DB8598 100%)',
       
        // Gradientes radiais
        'warm-radial': 'radial-gradient(circle at center, #F29C45 0%, #DB8598 70%, transparent 100%)',
        'chocolate-radial': 'radial-gradient(circle at center, #7F524C 0%, transparent 70%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    // Plugin personalizado para utilitários adicionais
    function({ addUtilities, addComponents, theme }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-md': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.12), 2px 2px 4px rgba(0, 0, 0, 0.08)',
        },
        '.text-shadow-lg': {
          textShadow: '15px 15px 30px rgba(0, 0, 0, 0.11), 5px 5px 15px rgba(0, 0, 0, 0.08)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
        '.transform-gpu': {
          transform: 'translate3d(0, 0, 0)',
        },
      }
 
      const newComponents = {
        '.btn-primary': {
          backgroundColor: theme('colors.primary.600'),
          color: theme('colors.white'),
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.lg'),
          fontWeight: theme('fontWeight.semibold'),
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: theme('colors.primary.700'),
            transform: 'translateY(-1px)',
            boxShadow: theme('boxShadow.md'),
          },
          '&:active': {
            transform: 'translateY(0)',
            boxShadow: theme('boxShadow.sm'),
          },
        },
        '.btn-secondary': {
          backgroundColor: theme('colors.secondary.600'),
          color: theme('colors.white'),
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.lg'),
          fontWeight: theme('fontWeight.semibold'),
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: theme('colors.secondary.700'),
            transform: 'translateY(-1px)',
            boxShadow: theme('boxShadow.md'),
          },
          '&:active': {
            transform: 'translateY(0)',
            boxShadow: theme('boxShadow.sm'),
          },
        },
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.xl'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.soft'),
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: theme('boxShadow.medium'),
            transform: 'translateY(-4px)',
          },
        },
        '.glass': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
       
        // Componentes específicos da Choconessa
        '.choconessa-card': {
          backgroundColor: theme('colors.white'),
          borderRadius: '2rem',
          padding: theme('spacing.6'),
          boxShadow: '0 4px 25px -5px rgba(127, 82, 76, 0.1), 0 10px 10px -5px rgba(127, 82, 76, 0.04)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 10px 40px -10px rgba(127, 82, 76, 0.15), 0 4px 20px -2px rgba(127, 82, 76, 0.1)',
            transform: 'translateY(-8px) scale(1.02)',
          },
        },
       
        '.choconessa-button': {
          backgroundColor: theme('colors.brand-accent-pink'),
          color: theme('colors.white'),
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.lg'),
          fontWeight: theme('fontWeight.semibold'),
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            transition: 'left 0.5s',
          },
          '&:hover': {
            backgroundColor: theme('colors.brand-accent-peach'),
            transform: 'translateY(-2px) scale(1.05)',
            boxShadow: '0 8px 25px -5px rgba(219, 133, 152, 0.4)',
          },
          '&:hover::before': {
            left: '100%',
          },
          '&:active': {
            transform: 'translateY(0) scale(1)',
            boxShadow: '0 2px 10px -2px rgba(219, 133, 152, 0.3)',
          },
        },
       
        '.glass-brown': {
          backgroundColor: 'rgba(127, 82, 76, 0.1)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(127, 82, 76, 0.2)',
        },
       
        '.glass-cream': {
          backgroundColor: 'rgba(249, 249, 242, 0.9)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(249, 249, 242, 0.3)',
        },
       
        '.shimmer': {
          backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 2s linear infinite',
        },
       
        '.text-gradient': {
          background: 'linear-gradient(135deg, #F29C45 0%, #DB8598 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },
       
        '.hover-lift': {
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
          },
        },
       
        '.hover-glow': {
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 0 20px rgba(242, 156, 69, 0.6)',
          },
        },
      }
 
      addUtilities(newUtilities)
      addComponents(newComponents)
    },
  ],
};
 