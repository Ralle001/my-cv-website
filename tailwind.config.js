module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        darkBackground: '#121212', // Slightly darker for the background
        darkCard: '#1E1E1E',       // Card background color
        darkText: '#E5E5E5',       // Light text color
        darkAccent: '#3B82F6',     // Accent color (blue)
        darkHighlight: '#60A5FA',  // Highlight color (lighter blue)
      },
    },
  },
  plugins: [],
};
