/**
 * Configuring MathJax
 */
// Latex extension list http://docs.mathjax.org/en/latest/input/tex/extensions/index.html
MathJax = {
    loader: {
    load: ['ui/menu', '[tex]/all-packages', '[tex]/physics',
            '[tex]/ams', '[tex]/gensymb', '[tex]/noundefined',
            '[tex]/noerrors']
    },
    tex: {
    packages: {'[+]': ['physics', 'ams', 'gensymb', 'noundefined']},
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    processEscapes: false,
    noundefined: {
        color: 'red',
        background: '',
        size: ''
    }
    },
};