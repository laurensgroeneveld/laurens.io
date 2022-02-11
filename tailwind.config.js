module.exports = {
    mode: 'jit',
    content: ['dist/**/*.html'],
    darkMode: 'class',
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
}