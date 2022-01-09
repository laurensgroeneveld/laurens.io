module.exports = {
    mode: 'jit',
    content: ['_site/**/*.html'],
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
}