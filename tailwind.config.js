// Tailwind settings for the site. Only needed when regenerating assets/css/tailwind.css
// (see README > "Editing the design"). The live site never loads this file.
module.exports = {
    content: ['./*.html'],
    theme: {
        extend: {
            fontFamily: {
                display: ['"Syne"', 'sans-serif'],
                body: ['"Inter"', 'sans-serif'],
            },
            colors: {
                stone: {
                    50: '#F9F9F8',
                    100: '#F0EFEA',
                    900: '#1A1A1A',
                }
            },
            transitionTimingFunction: {
                'slow-ease': 'cubic-bezier(0.16, 1, 0.3, 1)',
            }
        }
    }
};
