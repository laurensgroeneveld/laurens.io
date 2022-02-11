document.addEventListener('alpine:init', () => {
    Alpine.store('theme', {
        currentTheme: 'system',

        init() {
            if ('theme' in localStorage) {
                this.currentTheme = localStorage.theme;
            }

            this.update();

            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', () => this.update());
        },

        set(theme) {
            this.currentTheme = theme;
            localStorage.theme = theme;

            this.update();
        },

        prefersDarkMode() {
            return this.currentTheme === 'dark' || (this.currentTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
        },

        update() {
            if (this.prefersDarkMode()) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        },
    });
});