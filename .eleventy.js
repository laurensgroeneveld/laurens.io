const now = Date.now().toString();

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget('./tailwind.config.js');
    eleventyConfig.addWatchTarget('./styles/site.css');

    eleventyConfig.addPassthroughCopy({ './_tmp/site.css': './site.css' });

    eleventyConfig.addPassthroughCopy({
        './node_modules/alpinejs/dist/cdn.js': './js/alpine.js',
    });

    eleventyConfig.addShortcode('version', function () {
        return now;
    });

    eleventyConfig.addNunjucksFilter("formatDate", function(value) {
        return value.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    });

    return {
        dir: { input: 'site', output: 'dist', includes: '_includes', layouts: '_includes/layouts' },
      };
};
