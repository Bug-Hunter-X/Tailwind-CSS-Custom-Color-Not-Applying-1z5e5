```javascript
// Corrected Tailwind CSS configuration file (tailwind.config.js)
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Ensure all relevant files are included
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3498db', // Double-check for typos
      },
    },
  },
  plugins: [],
};
```

Ensure that:

1. Your `content` array includes all files where you use the custom class.  Add `'./src/**/*.{js,ts,jsx,tsx}'` or similar to include all files inside your `src` directory.
2. The custom color name ('custom-blue') in your HTML exactly matches the name defined in `tailwind.config.js`. Pay close attention to case sensitivity.
3. You've run `npm run build` (or the equivalent) to rebuild your Tailwind CSS files after making changes to `tailwind.config.js`.