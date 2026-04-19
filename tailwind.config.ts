import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'hh-bg': '#F6F4ED', // The soft cream background
                'hh-dark': '#112222', // The deep forest/slate header
                'hh-accent': '#2E7D7D', // Teal accents
                'hh-card': '#FFFFFF',
            },
            borderRadius: {
                '3xl': '24px',
            }
        },
    },
    plugins: [],
};
export default config;