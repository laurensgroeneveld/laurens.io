const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const now = Date.now().toString();

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addWatchTarget('./tailwind.config.js');

    eleventyConfig.addPassthroughCopy("_redirects");

    eleventyConfig.addPassthroughCopy({
        './node_modules/alpinejs/dist/cdn.min.js': './js/alpine.js',
    });
    eleventyConfig.addPassthroughCopy({
        './site/scripts/theme.js': './js/theme.js',
    });
    eleventyConfig.addPassthroughCopy({
        './site/styles/prism-theme.css': './css/prism-theme.css',
    });

    eleventyConfig.addShortcode('version', function () {
        return now;
    });

    eleventyConfig.addNunjucksFilter("formatDate", function(value) {
        return value.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    });

    return {
        dir: { input: 'site', output: 'dist', data: '_data', includes: '_includes', layouts: '_includes/layouts' },
      };
};
