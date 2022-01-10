module.exports = {
    mode: 'jit',
    content: ['dist/**/*.html'],
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
}