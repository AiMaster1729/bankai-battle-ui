
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				bleach: {
					black: '#000000',
					white: '#FFFFFF',
					red: '#000000', // Changed to black
					blue: '#000000', // Changed to black
					gold: '#000000', // Changed to black
					purple: '#000000', // Changed to black
					gray: '#4B4B4B',
				}
			},
			fontFamily: {
				shojumaru: ['Shojumaru', 'cursive'],
				noto: ['Noto Sans JP', 'sans-serif'],
				bebas: ['Bebas Neue', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-manga': {
					'0%, 100%': { 
						transform: 'scale(1)',
						boxShadow: '0 0 0 rgba(0, 0, 0, 0.2)',
					},
					'50%': { 
						transform: 'scale(1.05)',
						boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)',
					},
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'slash': {
					'0%': { transform: 'translateX(-10px) rotate(-3deg)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateX(10px) rotate(3deg)', opacity: '0' },
				},
				'ink-spread': {
					'0%': { 
						transform: 'scale(0)', 
						opacity: '0.8',
						borderRadius: '100%' 
					},
					'100%': { 
						transform: 'scale(1)', 
						opacity: '0',
						borderRadius: '0%' 
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-manga': 'pulse-manga 2s infinite',
				'fade-in': 'fade-in 0.5s ease-out',
				'slash': 'slash 0.3s ease-out',
				'ink-spread': 'ink-spread 0.8s ease-out forwards',
			},
			backgroundImage: {
				'hero-pattern': "linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0.1))",
				'card-gradient': "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0.05))",
				'manga-lines': "repeating-linear-gradient(to right, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 1px, transparent 1px, transparent 20px)",
				'manga-dots': "radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
				'speed-lines': "repeating-linear-gradient(45deg, #000, #000 1px, transparent 1px, transparent 10px)",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
