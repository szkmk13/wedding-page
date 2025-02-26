import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    darkMode: ["class"],
    content: ["./src/**/*.tsx"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-geist-sans)',
                    ...fontFamily.sans
                ]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			beige: '#eedcb9',
			// rose: '#e29c9c',
			gold: '#fdedc6',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			glow: {
  				'0%, 100%': {
  					boxShadow: '0 0 5px rgba(52, 211, 153, 0.5), 0 0 10px rgba(52, 211, 153, 0.3)'
  				},
  				'50%': {
  					boxShadow: '0 0 10px rgba(52, 211, 153, 0.8), 0 0 20px rgba(52, 211, 153, 0.5)'
  				}
  			},
  			shimmer: {
  				'0%': {
  					backgroundPosition: '200% 0'
  				},
  				'100%': {
  					backgroundPosition: '-200% 0'
  				}
  			},
  			perimeterShimmer: {
  				'0%, 100%': {
  					clipPath: 'inset(0 0 calc(100% - 2px) 0)'
  				},
  				'25%': {
  					clipPath: 'inset(0 0 0 calc(100% - 2px))'
  				},
  				'50%': {
  					clipPath: 'inset(calc(100% - 2px) 0 0 0)'
  				},
  				'75%': {
  					clipPath: 'inset(0 calc(100% - 2px) 0 0)'
  				}
  			}
  		},
  		animation: {
  			glow: 'glow 2s ease-in-out infinite',
  			shimmer: 'shimmer 3s linear infinite',
  			perimeterShimmer: 'perimeterShimmer 4s linear infinite'
  		}
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
