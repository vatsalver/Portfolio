/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Make sure this path covers ALL your React components
    ],
    theme: {
        extend: {
            // You might have custom colors, fonts, etc., here.
            // For example, if you're using custom CSS variables:
            // colors: {
            //   background: "hsl(var(--background))",
            //   foreground: "hsl(var(--foreground))",
            //   primary: {
            //     DEFAULT: "hsl(var(--primary))",
            //     foreground: "hsl(var(--primary-foreground))",
            //   },
            //   // ... other colors from your custom CSS variables
            // },
        },
    },
    plugins: [],
}