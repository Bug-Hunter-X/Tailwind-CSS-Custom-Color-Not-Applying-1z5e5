```javascript
// In your Tailwind CSS configuration file (tailwind.config.js)
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3498db',
      },
    },
  },
  plugins: [],
};
```

```html
<!-- In your HTML file -->
<div class="bg-custom-blue p-4">
  This should be blue!
</div>
```