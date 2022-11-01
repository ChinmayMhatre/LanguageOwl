/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#141E24",
                secondary: "#37464E",
                nav: "rgba(55, 70, 78, 0.2)",
            },
        },
        screens: {
            sm: "640px",

            md: "768px",

            lg: "1280px",

            xl: "1400px",

            "2xl": "1536px",
        },
    },
    plugins: [],
};
