/**
 * Configuring MathJax
 */
// Latex extension list http://docs.mathjax.org/en/latest/input/tex/extensions/index.html
MathJax = {
    loader: {
        load: ['ui/menu', '[tex]/all-packages', '[tex]/physics',
            '[tex]/ams', '[tex]/gensymb', '[tex]/noundefined',
            '[tex]/noerrors', '[tex]/boldsymbol', '[tex]/textcomp', '[tex]/textmacros'
        ]
    },
    tex: {
        packages: { '[+]': ['physics', 'ams', 'gensymb', 'noundefined', 'textcomp', 'bbox', 'boldsymbol', 'textmacros'] },
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        processEscapes: false,
        noundefined: {
            color: 'red',
            background: '',
            size: ''
        },
        macros: {
            RR: "{\\bf R}",
            bold: ["{\\bf #1}", 1],
            text: ["{#1}", 1],
            textalpha: "{\\alpha}",
            textbeta: "{\\beta}",
            textgamma: "{\\gamma}",
            textdelta: "{\\delta}",
            xspace: "{}",
            mbox: ["{#1}", 1]

        }
    },
};